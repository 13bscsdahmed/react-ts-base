import { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router';

interface PublicGuardProps {
  children: ReactNode;
}

const PublicGuard = (props: PublicGuardProps) => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  } else {
    return props.children as ReactElement;
  }
}

export default PublicGuard;