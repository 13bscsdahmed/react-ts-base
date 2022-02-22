import { RouteObject } from 'react-router';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';
import DashboardRoutes from '@modules/secure/modules/dashboard/dashboard.routes';

const Dashboard = React.lazy(() => import('@modules/secure/modules/dashboard/Dashboard'));

const SecureRoutes: RouteObject[] = [
  {
    path: routesConfig.dashboard.root,
    element: <Dashboard />,
    children: DashboardRoutes,
  },
];

export default SecureRoutes;
