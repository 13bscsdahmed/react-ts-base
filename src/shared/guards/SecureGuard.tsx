import { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router';
import { routesConfig } from '@shared/configs/routes.config';

interface SecureGuardProps {
  children: ReactNode;
}

const SecureGuard = (props: SecureGuardProps) => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to={`/${routesConfig.public.login}`} />
  } else {
    return props.children as ReactElement;
  }
}

export default SecureGuard;