import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateVideoDto } from './create-video.dto';

export class UpdateVideoDto extends PartialType(CreateVideoDto) {
  @IsString()
  source: string;
  @IsString()
  chapter: string;
  @IsString()
  title: string;
  @IsNumber()
  courseId: number;
  @IsString()
  overview: string;
}
