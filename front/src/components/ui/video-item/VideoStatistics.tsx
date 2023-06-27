import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC } from 'react';

import { formatNumber } from '@/utils/format-number';

import styles from './VideoItem.module.scss';

interface IVideoStatistics {
  views?: number;
  createdAt?: string;
}

dayjs.extend(relativeTime);

const VideoStatistics: FC<IVideoStatistics> = ({ views, createdAt }) => {
  return (
    <div className={styles.numberInfo}>
      <div className={styles.views}>{formatNumber(views || 0)} просмотров</div>
      {!!createdAt && (
        <>
          <div className="mx-2">.</div>

          <div className={styles.date}>
            {dayjs(new Date(createdAt)).fromNow()}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoStatistics;
