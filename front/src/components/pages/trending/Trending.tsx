import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import { ITrending } from '@/components/pages/trending/trending.interface';

const Trending: FC<ITrending> = ({ topVideos }) => {
  return (
    <Layout>
      <Catalog newVideos={topVideos} />
    </Layout>
  );
};

export default Trending;
