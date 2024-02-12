import { IsOptional, IsString } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  page?: string;

  @IsOptional()
  @IsString()
  perPage?: string;
}

export class OrderByWithPagination extends PaginationDto {
  @IsString()
  @IsOptional()
  orderBy?: 'desc' | 'asc';
}
