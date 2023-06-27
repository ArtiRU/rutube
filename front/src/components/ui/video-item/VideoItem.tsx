import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

import Avatar from '@/components/ui/avatar/Avatar';
import VideoDuration from '@/components/ui/video-item/VideoDuration';
import VideoStatistics from '@/components/ui/video-item/VideoStatistics';
import { IVideoItem } from '@/components/ui/video-item/video-item.interface';

import styles from './VideoItem.module.scss';

const VideoItem: FC<IVideoItem> = ({
  isSmall,
  isUpdateLink,
  removeHandler,
  item,
}) => {
  const { push } = useRouter();

  return (
    <div
      className={cn(styles.videoItem, {
        [styles.small]: isSmall,
      })}
    >
      {!!removeHandler && (
        <button
          className="absolute bottom-3 right-3 z-10"
          onClick={() => removeHandler(item.id)}
        >
          <BiTrash className="text-lg text-red-700" />
        </button>
      )}
      {isUpdateLink && (
        <button
          className="absolute bottom-3 right-3 z-10"
          onClick={() => push(`/video/edit/${item.id}`)}
        >
          <BiEdit className="text-lg text-blue-600" />
        </button>
      )}

      <div
        className={cn(styles.thumbnail, {
          [styles.minImg]: isSmall,
        })}
      >
        {item.thumbnailPath && (
          <Image
            src={item.thumbnailPath}
            alt={item.name}
            fill={true}
            sizes="100"
          />
        )}
        <VideoDuration duration={item.duration || 0} />
        {item?.user?.avatarPath && (
          <div className="absolute -bottom-7 right-3">
            <Avatar user={item.user} />
          </div>
        )}
      </div>
      <div className={styles.information}>
        {!isSmall && <div className={styles.author}>{item.user?.name}</div>}
        <Link className={styles.name} href={`/v/${item.id}`}>
          {item.name}
        </Link>
        <VideoStatistics
          views={item.views}
          createdAt={!isSmall ? item.createdAt : undefined}
        />
      </div>
    </div>
  );
};

export default VideoItem;
