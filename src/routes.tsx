import type { RouteObject } from 'react-router';
import Public from '@modules/public/Public';
import Secure from '@modules/secure/Secure';
import { Navigate } from 'react-router-dom';
// import AuthGuard from '@guards/AuthGuard';
import SecureRoutes from '@modules/secure/secure.routes';
import Dashboard from '@modules/secure/modules/dashboard/Dashboard';
import SecureGuard from '@guards/SecureGuard';
import PublicRoutes from '@modules/public/public.routes';
import PublicGuard from '@guards/PublicGuard';

const Routes: RouteObject[] = [
  {
    path: '',
    element: <PublicGuard><Public/></PublicGuard>,
    children: PublicRoutes
  },
  {
    path: '',
    element:<SecureGuard><Secure/></SecureGuard>,
    children: SecureRoutes
  },
  { path: "*", element: <Navigate to='' /> }
]

export default Routes;

