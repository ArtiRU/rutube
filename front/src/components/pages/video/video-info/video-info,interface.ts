import { IUser } from '@/types/user.interface';
import { IVideo } from '@/types/video.interface';

export interface IVideoInfo {
  video: IVideo;
  channel: IUser;
}
