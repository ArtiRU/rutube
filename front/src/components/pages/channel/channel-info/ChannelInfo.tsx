import cn from 'classnames';
import { FC } from 'react';

import { IChannelInfo } from '@/components/pages/channel/channel-info/channel-info.interface';
import Avatar from '@/components/ui/avatar/Avatar';

import { formatNumber } from '@/utils/format-number';

import styles from './ChannelInfo.module.scss';

const ChannelInfo: FC<IChannelInfo> = ({ channel, message }) => {
  return (
    <div className={cn(styles.info, '!justify-start')}>
      {channel?.avatarPath && <Avatar user={channel} />}
      <div>
        <div className={styles.name}>{channel?.name}</div>
        <div className={styles.subscribersCount}>
          {message ||
            formatNumber(channel?.subscribersCount || 0) + ' Подписчиков'}
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
