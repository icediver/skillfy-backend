import { Prisma } from '@prisma/client';
import { ArrayMinSize, IsNumber, IsString } from 'class-validator';

export class CourseDto implements Prisma.CourseUpdateInput {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];

  @IsString({ each: true })
  @ArrayMinSize(1)
  lessons: string[];

  @IsNumber()
  categoryId: number;

  @IsNumber()
  teacherId: number;
}
