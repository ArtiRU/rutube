import Head from 'next/head';
import { FC } from 'react';

import { IMeta } from '@/components/seo/meta.interface';

const Meta: FC<IMeta> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title || 'Rutube'}</title>
        <meta
          itemProp="description"
          name="description"
          content={description || 'Rutube'}
        />
      </Head>
      ;{children}
    </>
  );
};

export default Meta;
