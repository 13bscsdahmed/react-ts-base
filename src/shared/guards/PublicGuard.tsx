import { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router';
import { routesConfig } from '@shared/configs/routes.config';

interface PublicGuardProps {
  children: ReactNode;
}

const PublicGuard = (props: PublicGuardProps) => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Navigate to={`/${routesConfig.dashboard.root}`} />
  } else {
    return props.children as ReactElement;
  }
}

export default PublicGuard;