import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { reviewReturnObject } from './review-return.object';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(
    private prisma: PrismaService,
    private paginationService: PaginationService,
  ) {}

  async getAll(dto: PaginationDto) {
    const { perPage, skip } = this.paginationService.getPagination(dto);

    const reviews = await this.prisma.review.findMany({
      skip,
      take: perPage,
      orderBy: {
        createdAt: 'desc',
      },
      select: reviewReturnObject,
    });

    return {
      reviews,
      length: await this.prisma.review.count(),
    };
  }

  async getByCourse(courseId: number, dto: PaginationDto) {
    const { perPage, skip } = this.paginationService.getPagination(dto);

    const reviews = await this.prisma.review.findMany({
      where: {
        courseId,
      },
      skip,
      take: perPage,
      orderBy: {
        createdAt: 'desc',
      },
      select: reviewReturnObject,
    });

    return {
      reviews,
      length: await this.prisma.review.count({
        where: {
          courseId,
        },
      }),
    };
  }

  async create(userId: number, dto: ReviewDto, courseId: number) {
    const review = await this.prisma.review.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userId,
          },
        },
        course: {
          connect: {
            id: courseId,
          },
        },
      },
    });

    return review;
  }
}
