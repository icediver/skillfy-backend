import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //--------------------Read--------------------------//

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'Success', type: [CategoryEntity] })
  async getAll() {
    return this.categoryService.getAll();
  }

  @ApiOperation({ summary: 'Get category by slug' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CategoryEntity,
  })
  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlug(slug);
  }

  @ApiOperation({ summary: 'Get category by slug' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CategoryEntity,
  })
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.categoryService.byId(+id);
  }

  //--------------------Update------------------------//
  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({ status: 200, description: 'Success', type: CategoryEntity })
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth('admin')
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    return this.categoryService.update(+id, dto);
  }

  //--------------------Create------------------------//
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 200, description: 'Success', type: CategoryEntity })
  @HttpCode(200)
  @Auth('admin')
  @Post()
  async create() {
    return this.categoryService.create();
  }

  //--------------------Delete------------------------//

  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: String,
  })
  @HttpCode(200)
  @Auth('admin')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.categoryService.delete(+id);
  }
}
