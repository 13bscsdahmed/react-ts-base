import { RouteObject } from 'react-router';
import Profile from '@modules/secure/modules/dashboard/modules/Profile';

const DashboardRoutes: RouteObject[] = [
  {
    path: 'profile',
    element: <Profile/>
  }
]

export default DashboardRoutes;