import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { Request, Response, response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, ...response } = await this.authService.register(dto);

    this.authService.addRefreshTokenToResponse(res, refreshToken);
    return response;
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
    const { refreshToken, ...response } = await this.authService.login(dto);
    this.authService.addRefreshTokenToResponse(res, refreshToken);
    return response;
  }

  @HttpCode(200)
  @Post('login/access-token')
  async getNewTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshTokenFromCookies =
      req.cookies[this.authService.REFRESH_TOKEN_NAME];

    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenFromResponse(res);
      throw new UnauthorizedException('Invalid refresh token');
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(
      refreshTokenFromCookies,
    );

    this.authService.addRefreshTokenToResponse(res, refreshToken);

    return response;
  }

  @HttpCode(200)
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshTokenFromResponse(res);
    return true;
  }

  @HttpCode(200)
  @Post('confirm')
  async confirmEmail(
    @Query('token') token: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    // const response = await this.authService.confirmEmail(token);
    // if (!response.user) throw new UnauthorizedException('Invalid token');

    const data = await this.authService.confirmEmail(token);

    if (!data.user) throw new UnauthorizedException('Invalid token');

    const { refreshToken, ...response } = data;

    this.authService.addRefreshTokenToResponse(res, refreshToken);

    return response;
    // this.authService.addRefreshTokenToResponse(res, refreshToken);
  }

  @HttpCode(200)
  @Get('reset-password-link')
  async sendResetPasswordLink(@Query('email') email: string) {
    return this.authService.sendResetPasswordLink(email);
  }

  @HttpCode(200)
  @Get('reset-password')
  async resetPassword(@Query('token') token: string) {
    return this.authService.resetPassword(token);
  }
}
