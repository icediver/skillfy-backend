import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

export enum EnumCourseSort {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export class GetAllCoursesDto extends PaginationDto {
  @IsOptional()
  @IsEnum(EnumCourseSort)
  sort?: EnumCourseSort;

  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @IsString()
  ratings?: string;

  @IsOptional()
  @IsString()
  minPrice?: string;

  @IsOptional()
  @IsString()
  maxPrice?: string;

  @IsOptional()
  @IsString()
  categoryId?: string;
}
