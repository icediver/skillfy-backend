import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Category name', nullable: true })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Category description', nullable: true })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Category icon', nullable: true })
  @IsString()
  icon: string;

  @ApiProperty({ description: 'Category colors', nullable: true })
  @IsArray()
  @IsString({ each: true })
  colors: string[];
}
