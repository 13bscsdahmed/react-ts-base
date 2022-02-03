import { RouteObject } from 'react-router';
import Login from '@modules/public/pages/Login';

const PublicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Login/>,
  },
  {
    path: 'login',
    element: <Login/>,
  }
]

export default PublicRoutes;