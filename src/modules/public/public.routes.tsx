import React from 'react';
import { RouteObject } from 'react-router';
import { routesConfig } from '@shared/configs/routes.config';

const Login = React.lazy(() => import('@modules/public/pages/Login'));

const PublicRoutes: RouteObject[] = [
	{
		index: true,
		element: <Login />,
	},
	{
		path: routesConfig.public.login,
		element: <Login />,
	},
];

export default PublicRoutes;
