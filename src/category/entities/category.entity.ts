import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updateAt: Date;
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  colors: string[];
  @ApiProperty()
  icon: string;
}
