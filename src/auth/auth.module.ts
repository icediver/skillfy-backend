import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from 'src/config/jwt.config';
import { MailService } from 'src/mail/mail.service';
import configuration from 'src/config/configuration';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JwtStrategy,
    UserService,
    PrismaService,
    MailService,
  ],
  imports: [
    // ConfigModule,
    JwtModule.registerAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AuthModule {}
