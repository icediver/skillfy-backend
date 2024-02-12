import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiProperty({ description: 'Category name', nullable: true })
  @Optional()
  @IsString()
  name: string;

  @Optional()
  @ApiProperty({ description: 'Category description', nullable: true })
  @IsString()
  description: string;

  @Optional()
  @ApiProperty({ description: 'Category icon', nullable: true })
  @IsString()
  icon: string;

  @ApiProperty({ description: 'Category colors', nullable: true })
  @Optional()
  @IsArray()
  @IsString({ each: true })
  colors: string[];
}
