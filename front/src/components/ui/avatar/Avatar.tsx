import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { IAvatar } from '@/components/ui/avatar/avatar.interface';

import styles from './Avatar.module.scss';

const Avatar: FC<IAvatar> = ({ user, isWhite }) => {
  return (
    <Link href={`/c/${user.id}`}>
      <span
        className={cn(styles.avatar, {
          [styles.white]: isWhite,
        })}
      >
        <Image
          className={styles.img}
          src={user.avatarPath || ''}
          alt={user.name}
          fill={true}
          sizes="100"
          priority
        />
        {user.isVerified && (
          <span className={styles.isVerified}>
            <IoIosCheckmarkCircle />
          </span>
        )}
      </span>
    </Link>
  );
};

export default Avatar;
