/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { Response } from 'express';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { MailService } from 'src/mail/mail.service';
import { User } from '@prisma/client';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
  EXPIRE_DAY_REFRESH_TOKEN = 1;
  REFRESH_TOKEN_NAME = 'refreshToken';

  constructor(
    private jwt: JwtService,
    private userService: UserService,
    private mailService: MailService,
  ) {}

  async login(dto: AuthDto) {
    const { password, ...user } = await this.validateUser(dto);

    const tokens = await this.issueTokens(user.id);

    return {
      user,
      ...tokens,
    };
  }

  async register(dto: AuthDto) {
    const oldUser = await this.userService.getByEmail(dto.email);

    if (oldUser) throw new BadRequestException('User already exists');

    const { password, ...user } = await this.userService.create(dto);

    const tokens = await this.issueTokens(user.id);

    return {
      user,
      ...tokens,
    };
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);
    if (!result) throw new UnauthorizedException('Invalid refresh token');

    const { password, ...user } = await this.userService.getById(result.id);

    const tokens = await this.issueTokens(user.id);

    return {
      user,
      ...tokens,
    };
  }

  private async issueTokens(userId: number) {
    const data = { id: userId };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  private async validateUser(dto: AuthDto) {
    const user = await this.userService.getByEmail(dto.email);

    if (!user) throw new NotFoundException('User not found');

    const isValid = await verify(user.password, dto.password);

    if (!isValid) throw new UnauthorizedException('Invalid password');

    return user;
  }

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: 'localhost',
      expires: expiresIn,
      // true if production
      secure: true,
      // lax if production
      sameSite: 'none',
    });
  }

  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: 'localhost',
      expires: new Date(0),
      // true if production
      secure: true,
      // lax if production
      sameSite: 'none',
    });
  }

  async sendConfirmation(user: Omit<User, 'password'>) {
    const data = { user };
    const confirmToken = this.jwt.sign(data, {
      expiresIn: '14d',
    });
    await this.mailService.sendMail(
      {
        to: user.email,
        subject: 'Confirmation Email',
        // url: `http://localhost:3000/auth/confirm-email/${confirmToken}`,
        url: `${process.env.FRONTEND_URL}/auth/confirm-email/${confirmToken}`,
        name: user.name ? user.name : user.email,
      },
      'confirm-email',
    );

    return 'Check you email';
  }

  async confirm(token: string) {
    try {
      const { user } = await this.jwt.verifyAsync(token);

      if (!user) throw new UnauthorizedException('Invalid token');
      if (!user.isEmailVerified) {
        const dto: UserDto = { isEmailVerified: true };

        await this.userService.updateProfile(user.id, dto);
      }

      const tokens = await this.issueTokens(user.id);

      return { user, ...tokens };
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async sendResetPasswordLink(email: string) {
    const { password, ...user } = await this.userService.getByEmail(email);

    if (!user) throw new NotFoundException('User not found');

    const data = { user };

    const resetToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    await this.mailService.sendMail(
      {
        to: user.email,
        subject: 'Reset Password',
        url: `${process.env.FRONTEND_URL}/auth/reset-password/${resetToken}`,
        name: user.name ? user.name : user.email,
      },
      'reset-password',
    );

    return 'Check your email';
  }
}
