import { IComment } from '@/types/comment.interface';

export interface ICommentItem {
  comment: IComment;
  user: any;
}
export interface IVideoComment {
  comments?: IComment[];
  videoId: number;
}
