import { FC } from 'react';

import VideoEdit from '@/components/pages/video-edit/VideoEdit';
import Meta from '@/components/seo/Meta';

const VideoEditPage: FC = () => {
  return (
    <Meta title="Редактирование видео">
      <VideoEdit />;
    </Meta>
  );
};

export default VideoEditPage;
