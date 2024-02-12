import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { MediaModule } from './media/media.module';
import { CategoryModule } from './category/category.module';
import { CourseModule } from './course/course.module';
import { PaginationModule } from './pagination/pagination.module';
import { VideoModule } from './video/video.module';
import { ReviewModule } from './review/review.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MailModule,
    MediaModule,
    CategoryModule,
    CourseModule,
    PaginationModule,
    VideoModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // providers: [PrismaService],
})
export class AppModule {}
