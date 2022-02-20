import type { RouteObject } from 'react-router';
import Secure from '@modules/secure/Secure';
import Public from '@modules/public/Public';
import { Navigate } from 'react-router-dom';
import SecureRoutes from '@modules/secure/secure.routes';
import PublicRoutes from '@modules/public/public.routes';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';
import AuthGuard from '@guards/AuthGuard';

const Routes: RouteObject[] = [
	{
		path: routesConfig.public.root,
		element: (
			<AuthGuard>
				<Public />
			</AuthGuard>
		),
		children: PublicRoutes,
	},
	{
		path: routesConfig.secure.root,
		element: (
			<AuthGuard>
				<Secure />
			</AuthGuard>
		),
		children: SecureRoutes,
	},
	{ path: '*', element: <Navigate to='' /> },
];

export default Routes;
