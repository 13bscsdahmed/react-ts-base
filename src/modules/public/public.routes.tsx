import { RouteObject } from 'react-router';
import Login from '@modules/public/pages/Login';
import { routesConfig } from '@shared/configs/routes.config';

const PublicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Login/>,
  },
  {
    path: routesConfig.public.login,
    element: <Login/>,
  }
]

export default PublicRoutes;