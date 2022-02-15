import type { RouteObject } from 'react-router';
import Secure from '@modules/secure/Secure';
import Public from '@modules/public/Public';
import { Navigate } from 'react-router-dom';
import SecureRoutes from '@modules/secure/secure.routes';
import PublicRoutes from '@modules/public/public.routes';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';
import PublicGuard from '@guards/PublicGuard';
import SecureGuard from '@guards/SecureGuard';


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
