import { IVideo } from '@/types/video.interface';

export interface ICatalog {
  newVideos?: IVideo[];
  removeHandler?: (videoId: number) => void;
  isUpdateLink?: boolean;
}
