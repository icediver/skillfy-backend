import { ApiProperty } from '@nestjs/swagger';
import { Review } from '@prisma/client';

export class ReviewEntity implements Review {
  @ApiProperty({
    example: '2022-01-01T00:00:00.000Z',
    description: 'Date of creation',
    type: Date,
  })
  createdAt: Date;
  @ApiProperty({
    example: '2022-01-01T00:00:00.000Z',
    description: 'Date of update',
    type: Date,
  })
  updateAt: Date;

  @ApiProperty({ example: 'text', description: 'Review text', type: String })
  text: string;

  @ApiProperty({ example: 1, description: 'Review rating', type: Number })
  id: number;

  @ApiProperty({
    example: 'title',
    description: 'Review title',
    type: String,
  })
  title: string;

  @ApiProperty({
    example: 'description',
    description: 'Review description',
    type: String,
  })
  description: string;

  @ApiProperty({
    example: 5,
    description: 'Review rating',
    type: Number,
  })
  rating: number;

  @ApiProperty({
    example: 1,
    description: 'User id',
    type: Number,
  })
  userId: number;

  @ApiProperty({
    example: 1,
    description: 'Course id',
    type: Number,
  })
  courseId: number;
}
