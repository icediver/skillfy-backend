import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'src/prisma.service';
import {
  videoReturnObject,
  videoReturnObjectFullest,
} from './return-video.object';
import { CourseService } from 'src/course/course.service';
import { generateSlug } from 'src/utils/generate.slug';

@Injectable()
export class VideoService {
  constructor(
    private prisma: PrismaService,
    private courseService: CourseService,
  ) {}

  async byId(id: number) {
    const video = await this.prisma.video.findUnique({
      where: { id },
      select: videoReturnObjectFullest,
    });
    if (!video) throw new NotFoundException('Видео не найдено!');
    return video;
  }

  async bySlug(slug: string) {
    const video = await this.prisma.video.findUnique({
      where: {
        slug,
      },
      select: videoReturnObjectFullest,
    });
    if (!video) throw new NotFoundException('Video not found');

    return video;
  }

  async byCourse(slug: string) {
    const video = await this.prisma.video.findMany({
      where: {
        course: {
          slug,
        },
      },
      orderBy: { title: 'asc' },
      select: videoReturnObject,
    });
    if (!video) throw new NotFoundException('Video not found');
    return video;
  }

  async create() {
    const defaultValues = {
      data: {
        source: '',
        chapter: '',
        slug: '',
        title: '',
        overview: '',
      },
    };
    const video = await this.prisma.video.create(defaultValues);
    return video.id;
  }

  async update(id: number, dto: UpdateVideoDto) {
    const { source, chapter, title, overview, courseId } = dto;
    const values = {
      source,
      chapter,
      title,
      overview,
    };

    await this.courseService.byId(courseId);

    return this.prisma.video.update({
      where: { id },
      data: {
        ...values,
        slug: generateSlug(title),
        course: { connect: { id: courseId } },
      },
    });
  }
  async findAll() {
    return this.prisma.video.findMany({
      select: videoReturnObjectFullest,
      orderBy: { title: 'asc' },
    });
  }

  remove(id: number) {
    return this.prisma.video.delete({ where: { id } });
  }
}
