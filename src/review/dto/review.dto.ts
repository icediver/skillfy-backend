import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class ReviewDto {
  @ApiProperty({ example: 5, description: 'Review rating', type: Number })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'text', description: 'Review text', type: String })
  @IsString()
  text: string;
}
