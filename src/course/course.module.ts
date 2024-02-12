import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PaginationModule } from 'src/pagination/pagination.module';
import { CategoryModule } from 'src/category/category.module';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [CourseController],
  imports: [PaginationModule, CategoryModule, UserModule],
  providers: [CourseService, PrismaService, PaginationService],
  exports: [CourseService],
})
export class CourseModule {}
