import { IUser } from '@/types/user.interface';

export interface IChannel {
  channel: IUser;
}

export interface ICommentForm {
  videoId: number;
}
