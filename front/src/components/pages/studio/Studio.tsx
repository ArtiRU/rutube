import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import Heading from '@/components/ui/heading/Heading';
import Loader from '@/components/ui/loader/Loader';

import { api } from '@/store/api/api';
import { videoApi } from '@/store/api/video.api';

const Studio: FC = () => {
  const [deleteVideo] = videoApi.useDeleteVideoMutation();
  const { data, isLoading } = api.useGetProfileQuery(null);

  const videos = data?.videos;
  return (
    <Layout>
      <Heading title="Студия" />
      <div>
        {isLoading ? (
          <Loader count={5} />
        ) : videos?.length ? (
          <Catalog
            newVideos={videos}
            removeHandler={deleteVideo}
            isUpdateLink
          />
        ) : (
          <p>Видео не найдено!</p>
        )}
      </div>
    </Layout>
  );
};

export default Studio;
