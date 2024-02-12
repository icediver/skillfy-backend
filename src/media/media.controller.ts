import {
  Controller,
  HttpCode,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { MediaService } from './media.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MediaResponse } from './media.interface';

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({ summary: 'Upload media' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: MediaResponse,
  })
  @HttpCode(200)
  @Post()
  @Auth()
  @UseInterceptors(FileInterceptor('image'))
  async uploadsMediaFile(
    @CurrentUser('id') userId: number,
    @UploadedFile() mediaFile: Express.Multer.File,
    @Query('folder') folder?: string,
  ) {
    return this.mediaService.saveMedia(mediaFile, folder, userId);
  }
}
