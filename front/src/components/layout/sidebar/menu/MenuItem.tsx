import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { IMenuItem } from '@/components/layout/sidebar/menu/menu-interface';
import ReactIcon from '@/components/ui/icons/ReactIcon';

import useAuth from '@/hooks/useAuth';

import styles from './Menu.module.scss';

const MenuItem: FC<IMenuItem> = ({ icon, title, link, image }) => {
  const { user } = useAuth();
  const path = usePathname();

  if (link === '/my-channel')
    if (!user) return null;
    else {
      link = `/c/${user?.id}`;
    }
  return (
    <li>
      <Link className={path === link ? styles.active : ''} href={link}>
        {icon && (
          <span>
            <ReactIcon name={icon} />
          </span>
        )}
        {image && (
          <span className={styles.image}>
            <Image src={image} alt={title} fill={true} sizes="100%" />
          </span>
        )}
      </Link>
      <b>{title}</b>
    </li>
  );
};

export default MenuItem;
