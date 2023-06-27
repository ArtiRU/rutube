import { FC } from 'react';

import Studio from '@/components/pages/studio/Studio';
import Meta from '@/components/seo/Meta';

const StudioPage: FC = () => {
  return (
    <Meta title="Rutube Студия" description="Просмотр ваших видео">
      <Studio />;
    </Meta>
  );
};

export default StudioPage;
