import { FC } from 'react';

import AddComment from '@/components/pages/video/comments/AddComment';
import CommentItem from '@/components/pages/video/comments/CommentItem';
import { IVideoComment } from '@/components/pages/video/comments/comment.interface';

import useAuth from '@/hooks/useAuth';

import styles from './Comments.module.scss';

const Comments: FC<IVideoComment> = ({ comments, videoId }) => {
  const { user } = useAuth();
  return (
    <div className={styles.comments}>
      <h2>Комментарии</h2>
      <div className={styles.line} />
      {comments?.length ? (
        <div className={styles.grid}>
          {comments?.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              user={comment.user}
            />
          ))}
        </div>
      ) : (
        <p>Комментариев не найдено!</p>
      )}
      <div className={styles.bottomForm}>
        {user && <AddComment videoId={videoId} />}
      </div>
    </div>
  );
};

export default Comments;
