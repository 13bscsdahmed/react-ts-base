import { RouteObject } from 'react-router';
import Dashboard from '@modules/secure/modules/dashboard/Dashboard';
import Profile from '@modules/secure/modules/dashboard/modules/Profile';
import ProfileRoutes from '@modules/secure/modules/dashboard/modules/profile.routes';

const SecureRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: 'profile',
        element: <Profile/>,
        children: ProfileRoutes
      }
    ]
  },
]

export default SecureRoutes;