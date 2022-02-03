import type { RouteObject } from 'react-router';
import Public from '@modules/public/Public';
import Secure from '@modules/secure/Secure';
import { Navigate } from 'react-router-dom';
import SecureRoutes from '@modules/secure/secure.routes';
import SecureGuard from '@guards/SecureGuard';
import PublicRoutes from '@modules/public/public.routes';
import PublicGuard from '@guards/PublicGuard';
import { routesConfig } from '@shared/configs/routes.config';

const Routes: RouteObject[] = [
  {
    path: routesConfig.public.root,
    element: <PublicGuard><Public/></PublicGuard>,
    children: PublicRoutes
  },
  {
    path: routesConfig.secure.root,
    element:<SecureGuard><Secure/></SecureGuard>,
    children: SecureRoutes
  },
  { path: "*", element: <Navigate to='' /> }
]

export default Routes;

