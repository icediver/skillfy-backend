import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { generateSlug } from 'src/utils/generate.slug';
import { CourseDto } from './dto/course.dto';
import { GetAllCoursesDto } from './dto/get-all.courses.dto';
import {
  courseReturnObject,
  courseReturnObjectFullest,
} from './return-course.object';
import { UserService } from 'src/user/user.service';
import { FiltersService } from 'src/filters/filters.service';
import { ReviewService } from 'src/review/review.service';

@Injectable()
export class CourseService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
    private paginationService: PaginationService,
    private categoryService: CategoryService,
    private filtersService: FiltersService,
    private reviewService: ReviewService,
  ) {}

  //--------------------Read--------------------------//

  /**
   *GET course by Id.
   *
   * @param {number} id
   */
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

  /**
   * Get course by Slug.
   *
   * @param {string} slug
   */
  async bySlug(slug: string) {
    const [
      {
        _avg: { rating },
      },
      course,
    ] = await this.prisma.$transaction([
      this.prisma.review.aggregate({
        where: {
          course: { slug },
        },

        _avg: {
          rating: true,
        },
      }),
      this.prisma.course.findUnique({
        where: {
          slug,
        },

        select: courseReturnObjectFullest,
      }),
    ]);

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
    try {
      return await this.prisma.$transaction(async (tx) => {
        const currentCourse = await tx.course.findUnique({
          where: { id },
          select: courseReturnObjectFullest,
        });
        if (!currentCourse) throw new NotFoundException('Course not found');

        const courses = await tx.course.findMany({
          where: {
            category: {
              name: currentCourse.category.name,
            },
            NOT: {
              id: currentCourse.id,
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
          select: courseReturnObject,
        });
        const coursesWithRating = courses.map(async (course) => {
          const { slug } = course;
          const rating = await this.reviewService.getRatingByCourseSlug(slug);
          return {
            ...course,
            rating,
          };
        });

        const length = tx.course.count({
          where: {
            category: {
              name: currentCourse.category.name,
            },
            NOT: {
              id: currentCourse.id,
            },
          },
        });
        return {
          courses: await Promise.all(coursesWithRating),
          length,
        };
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  /**
   * GET all courses.
   *
   * @param {GetAllCoursesDto} dto
   */
  async getAll(dto: GetAllCoursesDto = {}) {
    const { perPage, skip } = this.paginationService.getPagination(dto);

    const filters = this.filtersService.createFilters(dto);

    const courses = await this.prisma.course.findMany({
      where: filters,
      orderBy: !!dto.sort
        ? this.filtersService.getSortOption(dto.sort)
        : { id: 'asc' },
      skip,
      take: perPage,
      select: courseReturnObject,
    });

    const coursesWithRating = courses.map(async (course) => {
      const { slug } = course;
      const rating = await this.reviewService.getRatingByCourseSlug(slug);
      return {
        ...course,
        rating,
      };
    });

    return {
      courses: await Promise.all(coursesWithRating),
      length: await this.prisma.course.count({
        where: filters,
      }),
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

  //--------------------Delete------------------------//

  async delete(id: number) {
    return this.prisma.course.delete({
      where: {
        id,
      },
    });
  }
}
