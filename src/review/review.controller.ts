import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { ReviewDto } from './dto/review.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReviewEntity } from './entities/review.entity';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  //--------------------Read--------------------------//

  @ApiOperation({ summary: 'Get all reviews' })
  @ApiResponse({ status: 200, description: 'Success', type: [ReviewEntity] })
  @UsePipes(new ValidationPipe())
  @Get()
  async getAll(@Query() queryDto: PaginationDto) {
    return this.reviewService.getAll(queryDto);
  }

  @ApiOperation({ summary: 'Get reviews by course' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ReviewEntity,
  })
  @Get('by-course/:courseId')
  async getByApartment(
    @Param('courseId') courseId: string,
    @Query() queryDto: PaginationDto,
  ) {
    return this.reviewService.getByCourse(+courseId, queryDto);
  }

  //--------------------Create------------------------//

  @ApiOperation({ summary: 'Create review' })
  @ApiResponse({ status: 200, description: 'Success', type: ReviewDto })
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('leave/:courseId')
  @Auth()
  async leaveReview(
    @CurrentUser('id') id: number,
    @Body() dto: ReviewDto,
    @Param('courseId') courseId: string,
  ) {
    return this.reviewService.create(+id, dto, +courseId);
  }
}
