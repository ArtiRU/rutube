import { FC } from 'react';

import ChannelInfo from '@/components/pages/channel/channel-info/ChannelInfo';
import { ICommentItem } from '@/components/pages/video/comments/comment.interface';

import styles from './Comments.module.scss';

const CommentItem: FC<ICommentItem> = ({ comment, user }) => {
  return (
    <div className={styles.commentItem}>
      <ChannelInfo channel={user} message={comment.message} />
    </div>
  );
};

export default CommentItem;
