import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Menu from '@/components/layout/sidebar/menu/Menu';

import { api } from '@/store/api/api';

const Subscriptions: FC = () => {
  const { data } = api.useGetProfileQuery(null);
  return (
    <Layout>
      <Menu
        title="Мои подписки"
        items={
          data?.subscriptions?.map(({ toChannel }) => ({
            image: toChannel.avatarPath,
            title: toChannel.name,
            link: `/c/${toChannel.id}`,
          })) || []
        }
      />
    </Layout>
  );
};

export default Subscriptions;
