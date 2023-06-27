import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import Video from '@/components/pages/video/Video';
import Meta from '@/components/seo/Meta';

import { VideoService } from '@/services/video.service';

import { IVideo } from '@/types/video.interface';

const VideoPage: FC<any> = ({ video }) => {
  return (
    <Meta title={video.name}>
      <Video video={video} />;
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: videos } = await VideoService.getAll();

    const paths = videos.map(video => ({
      params: {
        id: String(video.id),
      },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: video } = await VideoService.getVideoById(Number(params?.id));

    return {
      props: {
        video,
      },
    };
  } catch (e) {
    return {
      props: {
        video: {} as IVideo,
      },
    };
  }
};

export default VideoPage;
