import { ApiProperty } from '@nestjs/swagger';

export interface IMediaResponse {
  url: string;
  name: string;
}

export class MediaResponse implements IMediaResponse {
  @ApiProperty({
    type: String,
    example: 'https://example.com/image.png',
    required: true,
  })
  url: string;
  @ApiProperty({ type: String, example: 'image.png', required: true })
  name: string;
}
