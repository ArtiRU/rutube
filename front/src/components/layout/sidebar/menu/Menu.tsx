import { FC } from 'react';

import MenuItem from '@/components/layout/sidebar/menu/MenuItem';
import { IMenu } from '@/components/layout/sidebar/menu/menu-interface';
import Line from '@/components/ui/line/Line';

import styles from './Menu.module.scss';

const Menu: FC<IMenu> = ({ title, items }) => {
  return (
    <nav className={styles.menu}>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <MenuItem
            key={item.link}
            title={item.title}
            link={item.link}
            icon={item.icon}
            image={item.image}
          />
        ))}
      </ul>
      <Line />
    </nav>
  );
};

export default Menu;
