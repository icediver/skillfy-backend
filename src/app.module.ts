import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MailModule,
    MediaModule,
  ],
  controllers: [],
  // providers: [PrismaService],
})
export class AppModule {}
