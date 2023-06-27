import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import Comments from '@/components/pages/video/comments/Comments';
import VideoInfo from '@/components/pages/video/video-info/VideoInfo';
import VideoPlayer from '@/components/pages/video/video-player/VideoPlayer';

import { IUser } from '@/types/user.interface';

import { videoApi } from '@/store/api/video.api';

import styles from './Video.module.scss';

const Video: FC<any> = ({ video }) => {
  const { query } = useRouter();

  const [updateViews] = videoApi.useUpdateViewsMutation();

  useEffect(() => {
    if (query.id) updateViews(Number(query.id));
  }, [query.id, updateViews]);

  return (
    <Layout>
      <div className={styles.layout}>
        <VideoPlayer videoPath={video.videoPath} poster={video.thumbnailPath} />
        <Comments videoId={video.id} comments={video.comments || []} />
      </div>
      <div className={cn(styles.layout, 'mt-7')}>
        <VideoInfo video={video} channel={video.user || ({} as IUser)} />
        <div></div>
      </div>
    </Layout>
  );
};

export default Video;
