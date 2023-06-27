import dayjs from 'dayjs';
import { FC } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { IoEyeSharp } from 'react-icons/io5';
import { RiHeart2Fill } from 'react-icons/ri';

import ChannelInfo from '@/components/pages/channel/channel-info/ChannelInfo';
import { IVideoInfo } from '@/components/pages/video/video-info/video-info,interface';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

import { formatNumber } from '@/utils/format-number';

import { videoApi } from '@/store/api/video.api';

import styles from './VideoInfo.module.scss';

const VideoInfo: FC<IVideoInfo> = ({ channel, video }) => {
  const [updateLike, { isLoading: isLikeLoading }] =
    videoApi.useUpdateLikesMutation();
  return (
    <div className={styles.detail}>
      <div>
        <ChannelInfo channel={channel} />
        <h1>{video.name}</h1>
        <article className={styles.article}>{video.description}</article>
      </div>
      <div className="pt-2">
        <div className={styles.wrapperButton}>
          {video.user?.id && (
            <SubscribeButton channelIdForSubscribe={video.user.id} />
          )}
          <button
            className={styles.likeButton}
            onClick={() => updateLike(video.id)}
            disabled={isLikeLoading}
          >
            <RiHeart2Fill />
            Лайк
          </button>
        </div>
        <div className={styles.numberInfo}>
          <div>
            <IoEyeSharp />
            <span>{formatNumber(video.views || 0)}</span>
          </div>
          <div>
            <RiHeart2Fill />
            <span>{formatNumber(video.likes || 0)}</span>
          </div>
          <div>
            <HiCalendar />
            <span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
