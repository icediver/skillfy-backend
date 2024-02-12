import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { GetAllCoursesDto } from './dto/get-all.courses.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CourseDto } from './dto/course.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll(@Query() queryDto: GetAllCoursesDto) {
    return this.courseService.getAll(queryDto);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.courseService.byId(+id);
  }

  @Get('similar/:id')
  async getSimilar(@Param('id') id: string) {
    return this.courseService.getSimilar(+id);
  }

  @Get('by-slug/:slug')
  async getCourseBySlug(@Param('slug') slug: string) {
    return this.courseService.bySlug(slug);
  }

  @Get('by-category/:categorySlug')
  async getCourseByCategory(@Param('categorySlug') categorySlug: string) {
    return this.courseService.byCategory(categorySlug);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth('admin')
  @Post()
  async createCourse() {
    return this.courseService.create();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth('admin')
  async updateCourse(@Param('id') id: string, @Body() dto: CourseDto) {
    return this.courseService.update(+id, dto);
  }

  @HttpCode(200)
  @Patch('/update-views/:id')
  async updateViews(@Param('id') id: string) {
    return this.courseService.updateViews(+id);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth('admin')
  async deleteCourse(@Param('id') id: string) {
    return this.courseService.delete(+id);
  }

  @Get(':id')
  @Auth('admin')
  async getCourse(@Param('id') id: string) {
    return this.courseService.byId(+id);
  }
}
