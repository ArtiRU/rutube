import { IsString } from 'class-validator';

export class VideoDto {
  @IsString()
  description: string;

  isPublic?: boolean;

  @IsString()
  name: string;

  @IsString()
  videoPath: string;

  @IsString()
  thumbnailPath: string;
}