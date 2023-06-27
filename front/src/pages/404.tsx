import Link from 'next/link';
import { FC } from 'react';

const NotFound404: FC = () => {
  return (
    <div className="text-white flex items-center justify-center h-screen font-semibold">
      Вы перешли на несуществующую страницу, вернитесь на &nbsp;
      <Link className="text-purple" href="/">
        главную
      </Link>
    </div>
  );
};

export default NotFound404;
