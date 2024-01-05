import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigService } from '@nestjs/config';
import { getMailConfig } from 'src/config/mail.config';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getMailConfig,
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
