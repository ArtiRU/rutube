import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import { api } from '@/store/api/api';

import useActions from '@/hooks/useActions';
import useAuth from '@/hooks/useAuth';
import useOutside from '@/hooks/useOutside';

import styles from './ProfileMenu.module.scss';

const ProfileMenu: FC = () => {
  const { user } = useAuth();
  const { ref, isShow, setIsShow } = useOutside(false);
  const { logout } = useActions();

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  });

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)}>
        {data?.avatarPath && (
          <Image
            src={data?.avatarPath || ''}
            alt={data?.name}
            width={40}
            height={40}
            priority
          />
        )}

        <span className={styles.name}>{data?.name}</span>
        {isShow ? <GoChevronUp /> : <GoChevronDown />}
      </button>
      {isShow && (
        <div className={styles.profileMenu}>
          <ul>
            <li>
              <Link href={`/c/${user?.id}`}>Мой канал</Link>
            </li>
            <li>
              <Link href="/studio">В студию</Link>
            </li>
            <li>
              <button onClick={logout}>Выйти</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
