import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { PrismaService } from 'src/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, PrismaService, PaginationService],
})
export class ReviewModule {}
