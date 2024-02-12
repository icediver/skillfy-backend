import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @ApiProperty({ description: 'User name', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'User email', nullable: false })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', nullable: false })
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  @IsString()
  password: string;
}
