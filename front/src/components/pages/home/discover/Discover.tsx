import { FC } from 'react';

import { IDiscover } from '@/components/pages/home/discover/discover.interface';
import LargeVideoItem from '@/components/ui/video-item/LargeVideoItem';

import styles from './Discover.module.scss';

const Discover: FC<IDiscover> = ({ topVideo, randomVideo }) => {
  return (
    <div className={styles.discover}>
      <div className={styles.topVideo}>
        <LargeVideoItem video={topVideo} />
      </div>
      <div className={styles.randomVideo}>
        <LargeVideoItem video={randomVideo} />
      </div>
    </div>
  );
};

export default Discover;
