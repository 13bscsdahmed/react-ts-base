import './locales/i18n';
import React, { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router';
import Routes from './routes';
import UserService from '@shared/services/user/user.service';
import { injectReducer } from '@store/index';
import { storeConfig } from '@store/store.config';
import ConfigSlice from '@store/config/ConfigSlice';
import { todoActionTypes } from '@store/todos';
import { useDispatch } from 'react-redux';
import { configActionTypes } from '@store/config';


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  let appRoutes = useRoutes(Routes);
  useEffect(() => {
    injectReducer(storeConfig.slices.config, ConfigSlice.reducer);
    dispatch({type: configActionTypes.FETCH_CONFIG});
    console.log('location', location);
  }, [location])
  return (
    <div className='main'>
      <Suspense fallback="Loading ...">
        {appRoutes}
      </Suspense>
    </div>
  );
}

export default App;
