import { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router';

interface SecureGuardProps {
  children: ReactNode;
}

const SecureGuard = (props: SecureGuardProps) => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  } else {
    return props.children as ReactElement;
  }
}

export default SecureGuard;