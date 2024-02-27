import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PaginationModule } from 'src/pagination/pagination.module';
import { CategoryModule } from 'src/category/category.module';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { UserModule } from 'src/user/user.module';
import { FiltersService } from 'src/filters/filters.service';
import { ReviewModule } from 'src/review/review.module';

@Module({
  controllers: [CourseController],
  imports: [PaginationModule, CategoryModule, UserModule, ReviewModule],
  providers: [CourseService, PrismaService, PaginationService, FiltersService],
  exports: [CourseService],
})
export class CourseModule {}
