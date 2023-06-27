import { FC } from 'react';

import { ICatalog } from '@/components/pages/home/catalog/catalog.interface';
import Heading from '@/components/ui/heading/Heading';
import VideoItem from '@/components/ui/video-item/VideoItem';

import styles from './Catalog.module.scss';

const Catalog: FC<ICatalog> = ({ newVideos, removeHandler, isUpdateLink }) => {
  return (
    <div className={styles.recommended}>
      <div className={styles.topBlock}>
        <Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
      </div>
      <div className={styles.catalog}>
        {newVideos?.map(video => (
          <VideoItem
            key={video.id}
            item={video}
            removeHandler={removeHandler}
            isUpdateLink={isUpdateLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
