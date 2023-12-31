import { FC, PropsWithChildren } from 'react';

import Header from '@/components/layout/header/Header';
import Sidebar from '@/components/layout/sidebar/Sidebar';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <section className={styles.content}>
        <Header />
        <div className={styles.wrapper}>{children}</div>
      </section>
    </main>
  );
};

export default Layout;
