import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({
    description: 'User id',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'User creation date',
    example: new Date(),
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User update date',
    example: new Date(),
  })
  updateAt: Date;

  @ApiProperty({
    description: 'User email',
    example: 'p6s7H@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  password: string;

  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'User avatar path',
    example: 'avatar.png',
  })
  avatarPath: string;

  @ApiProperty({
    description: 'Is User admin?',
    example: 'true',
  })
  isAdmin: boolean;

  @ApiProperty({
    description: 'Is User email verified?',
    example: 'true',
  })
  isEmailVerified: boolean;
}
