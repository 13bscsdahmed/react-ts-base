import { RouteObject } from 'react-router';
import Profile from '@modules/secure/modules/dashboard/modules/Profile';
import { routesConfig } from '@shared/configs/routes.config';
import React from 'react';
import { injectReducers } from '@store/reducers';
import { storeConfig } from '@store/store.config';
import todoSlice from '@store/slices/todos/TodoSlice';

const Todos = React.lazy(() =>
  import('@modules/secure/modules/dashboard/pages/Todos/Todos').then(component => {
    injectReducers([storeConfig.slices.todos], [todoSlice.reducer]);
    return component;
  })
);

const DashboardRoutes: RouteObject[] = [
  {
    path: routesConfig.dashboard.profile,
    element: <Profile />,
  },
  {
    path: routesConfig.dashboard.todos,
    element: <Todos />,
  },
];

export default DashboardRoutes;
