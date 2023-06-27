import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import Avatar from '@/components/ui/avatar/Avatar';
import VideoDuration from '@/components/ui/video-item/VideoDuration';
import VideoStatistics from '@/components/ui/video-item/VideoStatistics';

import { IVideo } from '@/types/video.interface';

import styles from './VideoItem.module.scss';

const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
  const { push } = useRouter();

  return (
    video && (
      <div className={cn(styles.videoItem, styles.largeItem)}>
        <div className={styles.thumbnail}>
          <Image
            src={video.thumbnailPath}
            alt={video.name}
            fill={true}
            sizes="100"
            priority
          />
          <VideoDuration duration={video.duration || 0} />

          <div className={styles.information}>
            <Link className={styles.name} href={`/v/${video.id}`}>
              {video.name}
            </Link>
            {video?.user?.avatarPath && <Avatar user={video.user} isWhite />}

            <div className={styles.author}>{video?.user?.name}</div>

            <VideoStatistics views={video.views} createdAt={video.createdAt} />
          </div>
        </div>
      </div>
    )
  );
};

export default LargeVideoItem;
