import { RouteObject } from 'react-router';
import Dashboard from '@modules/secure/modules/dashboard/Dashboard';
import Profile from '@modules/secure/modules/dashboard/modules/Profile';
import ProfileRoutes from '@modules/secure/modules/dashboard/modules/profile.routes';
import { routesConfig } from '@shared/configs/routes.config';

const SecureRoutes: RouteObject[] = [
  {
    path: routesConfig.dashboard.root,
    element: <Dashboard/>,
    children: [
      {
        path: routesConfig.dashboard.profile,
        element: <Profile/>,
        children: ProfileRoutes
      }
    ]
  },
]

export default SecureRoutes;