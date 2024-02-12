import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';
import { generateSlug } from 'src/utils/generate.slug';
import { returnCategoryObject } from './return-category.object';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async byId(id: number) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
      select: returnCategoryObject,
    });
    if (!category) throw new NotFoundException('Category not found');

    return category;
  }

  async bySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        slug,
      },
      select: returnCategoryObject,
    });
    if (!category) throw new NotFoundException('Category not found');

    return category;
  }

  async getAll() {
    return this.prisma.category.findMany({
      select: returnCategoryObject,
      orderBy: { id: 'asc' },
    });
  }

  async create() {
    return this.prisma.category.create({
      data: {
        name: '',
        slug: '',
        description: '',
        icon: '',
        colors: [],
      },
    });
  }
  async update(id: number, dto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        slug: generateSlug(dto.name),
        description: dto.description,
        icon: dto.icon,
        colors: dto.colors,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
