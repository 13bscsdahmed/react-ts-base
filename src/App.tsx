import './locales/i18n';
import React, { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router';
import Routes from './routes';
import { injectReducer } from '@store/store';
import { storeConfig } from '@store/store.config';
import ConfigSlice from '@store/slices/config/ConfigSlice';
import { useDispatch } from 'react-redux';
import { configActionTypes } from '@store/slices';


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
