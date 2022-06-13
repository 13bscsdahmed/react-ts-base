import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import SecureRoutes from '@modules/secure/secure.routes';
import PublicRoutes from '@modules/public/public.routes';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';

const PublicGuard = React.lazy(() => import('@guards/PublicGuard'));
const SecureGuard = React.lazy(() => import('@guards/SecureGuard'));
const Public = React.lazy(() => import('@modules/public/Public'));
const Secure = React.lazy(() => import('@modules/secure/Secure'));

const Routes: RouteObject[] = [
  {
    path: routesConfig.public.root,
    element: (
      <PublicGuard>
        <Public />
      </PublicGuard>
    ),
    children: PublicRoutes,
  },
  {
    path: routesConfig.secure.root,
    element: (
      <SecureGuard>
        <Secure />
      </SecureGuard>
    ),
    children: SecureRoutes,
  },
  { path: '*', element: <Navigate to='' /> },
];

export default Routes;
