import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';
import { returnUserObject } from './dto/return-user.object';
import { CartDto } from './dto/cart.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //--------------------Read--------------------------//

  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        name: true,
        email: true,
        id: true,
        password: false,
      },
    });
  }

  async getById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        ...returnUserObject,
        favorites: {
          select: {
            id: true,
            title: true,
            slug: true,
            images: true,
            category: {
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  //--------------------Create------------------------//

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      name: dto.name ? dto.name : dto.email,
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: user,
    });
  }

  //--------------------Update------------------------//

  async updateProfile(id: number, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (isSameUser && id !== isSameUser.id)
      throw new BadRequestException('Email already in use');

    const user = await this.getById(id);

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: dto.email,
        name: dto.name,
        avatarPath: dto.avatarPath,
        password: dto.password ? await hash(dto.password) : user.password,
        isAdmin: dto.isAdmin,
        isEmailVerified: dto.isEmailVerified,
      },
    });
  }

  async toggleFavorite(userId: number, courseId: number) {
    try {
      await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            id: true,
            favorites: {
              select: {
                id: true,
              },
            },
          },
        });

        if (!user) throw new NotFoundException('User not found');

        const isExist = user.favorites.some((course) => course.id === courseId);

        await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            favorites: {
              [isExist ? 'disconnect' : 'connect']: {
                id: courseId,
              },
            },
          },
        });
      });
      return { message: 'Success' };
    } catch (error) {
      return { error: error.message };
    }
  }

  async addToPurchases(userId: number, courseId: number) {
    try {
      return await this.prisma.$transaction(async (tx) => {
        const currentCourse = await tx.course.findUnique({
          where: { id: courseId },
        });
        if (!currentCourse) throw new NotFoundException('Course not found');

        const user = await tx.user.update({
          where: {
            id: userId,
          },
          data: {
            purchases: {
              connect: {
                id: courseId,
              },
            },
          },
          select: returnUserObject,
        });

        return user;
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  async addCoursesToPurchases(userId: number, dto: CartDto) {
    const { coursesIds } = dto;
    try {
      return await this.prisma.$transaction(async (tx) => {
        const courses = await Promise.all(
          coursesIds.map(async (courseId) => {
            const currentCourse = await tx.course.findUnique({
              where: { id: courseId },
            });
            if (!currentCourse) throw new NotFoundException('Course not found');
            return currentCourse;
          }),
        );

        const user = await tx.user.update({
          where: {
            id: userId,
          },
          data: {
            purchases: {
              connect: courses.map((course) => ({
                id: course.id,
              })),
            },
          },
          select: returnUserObject,
        });

        return user;
      });
    } catch (error) {
      return { error: error.message };
    }
  }
}
