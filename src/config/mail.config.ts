import { ConfigService } from '@nestjs/config';
import { resolve } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerOptions } from '@nestjs-modules/mailer';

export const getMailConfig = async (
  config: ConfigService,
): Promise<MailerOptions> => ({
  transport: {
    host: config.get('MAIL_HOST'),
    port: config.get('MAIL_PORT'),
    auth: {
      user: config.get('MAIL_USER'),
      pass: config.get('MAIL_PASSWORD'),
    },
  },
  defaults: {
    from: `"No Reply" <${config.get('MAIL_FROM')}>`,
  },
  template: {
    // dir: join(__dirname, 'templates'),
    dir: resolve(__dirname, '..', 'mail', 'templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
});
