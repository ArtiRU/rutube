import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import Channel from '@/components/pages/channel/Channel';
import { IChannel } from '@/components/pages/channel/channel.interface';
import Meta from '@/components/seo/Meta';

import { UserService } from '@/services/user.service';

import { IUser } from '@/types/user.interface';

const ChannelPage: FC<IChannel> = ({ channel }) => {
  return (
    <Meta title={channel.name}>
      <Channel channel={channel} />;
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: users } = await UserService.getAll();
    const paths = users.map(user => ({
      params: {
        id: String(user.id),
      },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: channel } = await UserService.getUser(Number(params?.id));

    return {
      props: {
        channel,
      } as IChannel,
    };
  } catch (e) {
    return {
      props: {
        channel: {} as IUser,
      } as IChannel,
    };
  }
};

export default ChannelPage;
