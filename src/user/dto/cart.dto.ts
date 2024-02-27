import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNumber } from 'class-validator';

export class CartDto {
  @ApiProperty({
    example: [1, 2, 3],
    description: 'coursesIds',
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  coursesIds: number[];
}
