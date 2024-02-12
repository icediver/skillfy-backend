import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class AuthEntity {
  @ApiProperty({
    description: 'User',
    example: {
      id: 1,
      name: 'John Doe',
      email: 'email@email.com',
      isAdmin: false,
      isEmailVerified: true,
      avatarPath: 'http://example.com/avatarPath',
    },
  })
  user: User;

  @ApiProperty({ example: 'refreshToken', description: 'Refresh token' })
  refreshToken: string;
  @ApiProperty({ example: 'accessToken', description: 'Access token' })
  accessToken: string;
}
