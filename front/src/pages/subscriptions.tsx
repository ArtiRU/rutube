import { FC } from 'react';

import Subscriptions from '@/components/pages/subscribers/Subscriptions';
import Meta from '@/components/seo/Meta';

const SubscriptionsPage: FC = () => {
  return (
    <Meta title="Мои подписки" description="Подписки на каналы">
      <Subscriptions />;
    </Meta>
  );
};

export default SubscriptionsPage;
