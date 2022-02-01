import { ReactNode, FC } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Secure from '@modules/secure/Secure';
import Public from '@modules/public/Public';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({children}) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Routes>
      {isAuthenticated && (
        <Route path='/' element={<Secure />} />
      )}
      {!isAuthenticated && (
        <Route path='/' element={<Public />} />
      )}
    </Routes>
  }

  return <>{children}</>;
}

export default AuthGuard;