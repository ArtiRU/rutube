import { usePathname, useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { TypeComponentAuthField } from '@/providers/auth/auth-provider.interface';

import useAuth from '@/hooks/useAuth';

const CheckRole: FC<PropsWithChildren<TypeComponentAuthField>> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const { replace } = useRouter();

  const Children = () => <>{children}</>;

  if (isLoading) return null;

  if (user) return <Children />;

  if (isOnlyUser) pathname !== '/' && replace('/');

  return null;
};

export default CheckRole;
