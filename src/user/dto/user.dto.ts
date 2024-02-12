import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 'p6s7H@example.com',
    description: 'User email',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: '123456',
    description: 'User password',
    required: false,
  })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty({
    example: 'John',
    description: 'User name',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'avatar.png',
    description: 'User avatar path',
    required: false,
  })
  @IsOptional()
  @IsString()
  avatarPath?: string;

  @ApiProperty({
    example: 'true',
    description: 'Is User admin?',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;

  @ApiProperty({
    example: 'true',
    description: 'Is User email verified?',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isEmailVerified?: boolean;
}
