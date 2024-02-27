import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { CartDto } from './dto/cart.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //--------------------Read--------------------------//

  @ApiOperation({ summary: 'Get profile' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserEntity,
  })
  @Get('profile')
  @HttpCode(200)
  @Auth()
  async getProfile(@CurrentUser('id') id: number) {
    const { password, ...user } = await this.userService.getById(id); //eslint-disable-line

    return user;
  }

  //--------------------Update------------------------//
  //
  @ApiOperation({ summary: 'Update profile' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserEntity,
  })
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put('profile')
  async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto) {
    return this.userService.updateProfile(id, dto);
  }

  @HttpCode(200)
  @Auth()
  @Patch('favorites/:courseId')
  async toggleFavorite(
    @CurrentUser('id') id: number,
    @Param('courseId') courseId: string,
  ) {
    return this.userService.toggleFavorite(+id, +courseId);
  }

  @HttpCode(200)
  @Auth()
  @Patch('buy-course/:courseId')
  async buyCourse(
    @CurrentUser('id') userId: number,
    @Param('courseId') courseId: string,
  ) {
    return this.userService.addToPurchases(+userId, +courseId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch('buy-courses')
  async buyCourses(@CurrentUser('id') userId: number, @Body() dto: CartDto) {
    return this.userService.addCoursesToPurchases(+userId, dto);
  }
}
