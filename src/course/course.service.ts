import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { generateSlug } from 'src/utils/generate.slug';
import { CourseDto } from './dto/course.dto';
import { Prisma } from '@prisma/client';
import { EnumCourseSort, GetAllCoursesDto } from './dto/get-all.courses.dto';
import {
  courseReturnObject,
  courseReturnObjectFullest,
} from './return-course.object';
import { convertToNumber } from 'src/utils/convert-to-number';
import { UserService } from 'src/user/user.service';
import { async } from 'rxjs';

@Injectable()
export class CourseService {
  constructor(
    private prisma: PrismaService,
    private paginationService: PaginationService,
    private categoryService: CategoryService,
    private userService: UserService,
  ) {}

  //--------------------Read--------------------------//

  async byId(id: number) {
    const course = await this.prisma.course.findUnique({
      where: {
        id,
      },
      select: courseReturnObjectFullest,
    });
    if (!course) throw new NotFoundException('course not found');

    return course;
  }

  async bySlug(slug: string) {
    const {
      _avg: { rating },
    } = await this.prisma.review.aggregate({
      where: {
        course: { slug },
      },

      _avg: {
        rating: true,
      },
    });

    const course = await this.prisma.course.findUnique({
      where: {
        slug,
      },

      select: courseReturnObjectFullest,
    });
    if (!course) throw new NotFoundException('course not found');

    return { course, rating };
  }

  async byCategory(categorySlug: string) {
    const courses = await this.prisma.course.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
      },
      select: courseReturnObjectFullest,
    });

    if (!courses) throw new NotFoundException('courses not found!');

    return courses;
  }

  async getSimilar(id: number) {
    const currentcourse = await this.byId(id);

    if (!currentcourse)
      throw new NotFoundException('Current course not found!');

    const courses = await this.prisma.course.findMany({
      where: {
        category: {
          name: currentcourse.category.name,
        },
        NOT: {
          id: currentcourse.id,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: courseReturnObject,
    });

    return courses;
  }

  async getAll(dto: GetAllCoursesDto = {}) {
    const { perPage, skip } = this.paginationService.getPagination(dto);

    const filters = this.createFilters(dto);

    const courses = await this.prisma.course.findMany({
      where: filters,
      orderBy: !!dto.sort ? this.getSortOption(dto.sort) : { id: 'desc' },
      skip,
      take: perPage,
      select: courseReturnObject,
    });

    const coursesWithRating = courses.map(async (course) => {
      const { slug } = course;
      const rating = await this.prisma.review.aggregate({
        where: {
          course: { slug },
        },

        _avg: {
          rating: true,
        },
      });
      return {
        ...course,
        rating: rating._avg.rating,
      };
    });

    return {
      courses: await Promise.all(coursesWithRating),
      length: await this.prisma.course.count({
        where: filters,
      }),
    };
  }

  private createFilters(dto: GetAllCoursesDto): Prisma.CourseWhereInput {
    const filters: Prisma.CourseWhereInput[] = [];
    if (dto.searchTerm) filters.push(this.getSearchTermFilter(dto.searchTerm));

    if (dto.ratings)
      filters.push(
        this.getRatingFilter(dto.ratings.split('|').map((rating) => +rating)),
      );
    if (dto.minPrice || dto.maxPrice)
      filters.push(
        this.getPriceFilter(
          convertToNumber(dto.minPrice),
          convertToNumber(dto.maxPrice),
        ),
      );
    if (dto.categoryId) filters.push(this.getCategoryFilter(+dto.categoryId));

    return filters.length ? { AND: filters } : {};
  }

  private getSortOption(
    sort: EnumCourseSort,
  ): Prisma.CourseOrderByWithRelationInput[] {
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

  private getSearchTermFilter(searchTerm: string): Prisma.CourseWhereInput {
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

  private getRatingFilter(ratings: number[]): Prisma.CourseWhereInput {
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

  //--------------------Create------------------------//

  async create() {
    const course = await this.prisma.course.create({
      data: {
        description: '',
        title: '',
        price: 0,
        slug: '',
      },
    });

    return course.id;
  }

  //--------------------Update------------------------//

  async update(id: number, dto: CourseDto) {
    const {
      description,
      images,
      price,
      title,
      categoryId,
      lessons,
      teacherId,
    } = dto;

    await this.categoryService.byId(categoryId);
    await this.userService.getById(teacherId);

    return this.prisma.course.update({
      where: {
        id,
      },
      data: {
        description,
        images,
        price,
        title,
        lessons,
        slug: generateSlug(title),
        category: {
          connect: {
            id: categoryId,
          },
        },
        teacher: {
          connect: {
            id: teacherId,
          },
        },
      },
    });
  }

  async updateViews(id: number) {
    const currentCourse = await this.byId(id);
    if (!currentCourse) throw new NotFoundException('Course not found');
    return this.prisma.course.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }

  async delete(id: number) {
    return this.prisma.course.delete({
      where: {
        id,
      },
    });
  }
}
