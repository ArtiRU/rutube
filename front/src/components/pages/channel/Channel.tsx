import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ChannelInfo from '@/components/pages/channel/channel-info/ChannelInfo';
import { IChannel } from '@/components/pages/channel/channel.interface';
import Catalog from '@/components/pages/home/catalog/Catalog';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

const Channel: FC<IChannel> = ({ channel }) => {
  console.log(channel);
  return (
    <Layout>
      <div className="mb-10 w-1/3">
        <div className="flex items-center gap-10">
          <ChannelInfo channel={channel} />
          <SubscribeButton channelIdForSubscribe={channel.id} />
        </div>
        <article className="text-gray-500 mt-3">{channel?.description}</article>
      </div>
      <Catalog newVideos={channel?.videos || []} />
    </Layout>
  );
};

export default Channel;
