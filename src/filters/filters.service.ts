import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  EnumCourseSort,
  GetAllCoursesDto,
} from 'src/course/dto/get-all.courses.dto';
import { convertToNumber } from 'src/utils/convert-to-number';

@Injectable()
export class FiltersService {
  constructor() {}

  createFilters(dto: GetAllCoursesDto) {
    const filters: Prisma.CourseWhereInput[] = [];

    if (dto.searchTerm) {
      filters.push(this.getSearchFilter(dto.searchTerm));
    }

    if (dto.ratings) {
      filters.push(
        this.getRatingFilter(dto.ratings.split('|').map((rating) => +rating)),
      );
    }

    if (dto.minPrice || dto.maxPrice) {
      filters.push(
        this.getPriceFilter(
          convertToNumber(dto.minPrice),
          convertToNumber(dto.maxPrice),
        ),
      );
    }

    if (dto.categoryId) {
      filters.push(this.getCategoryFilter(+dto.categoryId));
    }

    return filters.length ? { AND: filters } : {};
  }

  private getSearchFilter(searchTerm: string): Prisma.CourseWhereInput {
    // logic to build search filter
    return {
      OR: [
        {
          category: {
            name: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
        {
          title: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
      ],
    };
  }

  private getRatingFilter(ratings: number[]) {
    // logic to build rating filter
    return {
      reviews: {
        some: {
          rating: {
            in: ratings,
          },
        },
      },
    };
  }

  private getPriceFilter(
    minPrice?: number,
    maxPrice?: number,
  ): Prisma.CourseWhereInput {
    let priceFilter: Prisma.IntFilter | undefined = undefined;

    if (minPrice) {
      priceFilter = {
        ...priceFilter,
        gte: minPrice,
      };
    }
    if (maxPrice) {
      priceFilter = {
        ...priceFilter,
        lte: maxPrice,
      };
    }
    return {
      price: priceFilter,
    };
  }

  private getCategoryFilter(categoryId: number): Prisma.CourseWhereInput {
    return {
      categoryId,
    };
  }

  getSortOption(sort: EnumCourseSort): Prisma.CourseOrderByWithRelationInput[] {
    switch (sort) {
      case EnumCourseSort.LOW_PRICE:
        return [{ price: 'asc' }];
      case EnumCourseSort.HIGH_PRICE:
        return [{ price: 'desc' }];
      case EnumCourseSort.OLDEST:
        return [{ createdAt: 'asc' }];
      default:
        return [{ createdAt: 'desc' }];
    }
  }
}
