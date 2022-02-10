import type { RouteObject } from 'react-router';
import Secure from '@modules/secure/Secure';
import { Navigate } from 'react-router-dom';
import SecureRoutes from '@modules/secure/secure.routes';
import PublicRoutes from '@modules/public/public.routes';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';
import userSlice from '@store/user/UserSlice';
import { injectReducers } from '@utils/utils';
import PublicGuard from '@guards/PublicGuard';
import SecureGuard from '@guards/SecureGuard';
const Public = React.lazy(() => import('@modules/public/Public').then((component) => {
  injectReducers([userSlice]);
  return component
}));

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
