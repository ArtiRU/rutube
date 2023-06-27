import Link from 'next/link';
import { FC } from 'react';

import Menu from '@/components/layout/sidebar/menu/Menu';
import { menuData } from '@/components/layout/sidebar/menu/menu.data';

import { api } from '@/store/api/api';

import useAuth from '@/hooks/useAuth';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  const { user } = useAuth();

  const { data } = api.useGetProfileQuery(null, {
    skip: !user,
  });

  return (
    <aside className={styles.sidebar}>
      <Link href="/">
        <div className={styles.logo}>Rutube</div>
      </Link>

      <Menu title="Меню" items={menuData} />

      {user && (
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
      )}

      <div className={styles.copy}>2022 Rutube </div>
    </aside>
  );
};

export default Sidebar;
