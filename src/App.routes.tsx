import type { RouteObject } from 'react-router';
import Public from './modules/public/Public';
import Secure from './modules/secure/Secure';
import { Navigate } from 'react-router-dom';
import AuthGuard from './shared/guards/AuthGuard';

const AppRoutes: RouteObject[] = [
  {
    path: '',
    element: <AuthGuard><Public/></AuthGuard>
  },
  {
    path: '/',
    element: <AuthGuard><Secure/></AuthGuard>
  },
  { path: "*", element: <Navigate to='' /> }
]

export default AppRoutes;

