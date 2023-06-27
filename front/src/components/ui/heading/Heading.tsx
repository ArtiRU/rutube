import { FC } from 'react';

import { IHeading } from '@/components/ui/heading/heading.interface';

import styles from './Heading.module.scss';

const Heading: FC<IHeading> = ({ title }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
