import { RouteObject } from 'react-router';
import Profile from '@modules/secure/modules/dashboard/modules/Profile';
import ProfileRoutes from '@modules/secure/modules/dashboard/modules/profile.routes';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';

const Dashboard = React.lazy(() => import('@modules/secure/modules/dashboard/Dashboard'));

const SecureRoutes: RouteObject[] = [
  {
    path: routesConfig.dashboard.root,
    element: <Dashboard />,
    children: [
      {
        path: routesConfig.dashboard.profile,
        element: <Profile />,
        children: ProfileRoutes,
      },
    ],
  },
];

export default SecureRoutes;
