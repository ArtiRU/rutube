import { shuffle } from 'lodash';
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import Discover from '@/components/pages/home/discover/Discover';
import { IHome } from '@/components/pages/home/home.interface';

import { IVideo } from '@/types/video.interface';

import { videoApi } from '@/store/api/video.api';

const Home: FC = () => {
  const { data: newVideos } = videoApi.useGetAllVideoQuery();
  const { data: topVideos } = videoApi.useGetMostPopularQuery();

  const props = {
    newVideos,
    topVideo: topVideos && topVideos[0],
    randomVideo: shuffle(
      (newVideos &&
        newVideos.filter(v => topVideos && v.id !== topVideos[0].id)) ||
        ({} as IVideo),
    )[0],
  } as IHome;

  return (
    <Layout>
      <Discover {...props} />
      <Catalog newVideos={newVideos} />
    </Layout>
  );
};

export default Home;
