import { RouteObject } from 'react-router';
import Profile from '@modules/secure/modules/dashboard/modules/Profile';
import { routesConfig } from '@shared/configs/routes.config';

const DashboardRoutes: RouteObject[] = [
  {
    path: routesConfig.dashboard.profile,
    element: <Profile />,
  },
];

export default DashboardRoutes;
