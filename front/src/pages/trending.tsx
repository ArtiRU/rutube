import { GetStaticProps } from 'next';
import { FC } from 'react';

import Trending from '@/components/pages/trending/Trending';
import { ITrending } from '@/components/pages/trending/trending.interface';
import Meta from '@/components/seo/Meta';

import { VideoService } from '@/services/video.service';

import AuthProvider from '@/providers/auth/AuthProvider';

const TrendingPage: FC<ITrending> = ({ topVideos }) => {
  return (
    <AuthProvider>
      <Meta title="Тренды" description="Лучший новинки сезона">
        <Trending topVideos={topVideos} />
      </Meta>
    </AuthProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: topVideos } = await VideoService.getMostPopular();

    return {
      props: {
        topVideos,
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        topVideos: [],
      },
    };
  }
};

export default TrendingPage;
