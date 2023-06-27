import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import useAuth from '@/hooks/useAuth';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const { push } = useRouter();

  if (!user) push('/');
  else return <>{children}</>;
};

export default AuthProvider;
