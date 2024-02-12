import { UseGuards, applyDecorators } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { TypeRole } from '../types/auth.interface';
import { OnlyAdminGuard } from '../guards/admin.guards';

// export const Auth = () => UseGuards(JwtAuthGuard);
export const Auth = (role: TypeRole = 'user') =>
  applyDecorators(
    role === 'admin'
      ? UseGuards(JwtAuthGuard, OnlyAdminGuard)
      : UseGuards(JwtAuthGuard),
  );
