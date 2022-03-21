import './locales/i18n';
import { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router';
import { injectReducers } from '@store/store';
import { storeConfig } from '@store/store.config';
import ConfigSlice from '@store/slices/config/ConfigSlice';
import { useDispatch } from 'react-redux';
import { configActionTypes } from '@store/slices';
import Routes from './routes';
import Toast from '@shared/components/toast/Toast';
import toastController from '@shared/components/toast/toast.service';
import { ToastStatuses } from '@shared/components/toast/ToastItem';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const appRoutes = useRoutes(Routes);
  useEffect(() => {
    dispatch({ type: configActionTypes.FETCH_CONFIG });
  }, [dispatch]);
  useEffect(() => {
    injectReducers([storeConfig.slices.config], [ConfigSlice.reducer]);
    console.log('location', location);
  }, [location]);
  return (
    <div className='main'>
      <Toast maxToastLimit={5} />
      <button
        type='button'
        onClick={() =>
          toastController.show(
            'Duis Lorem irure ex nisi laborum tempor non aliqua sunt. Culpa anim velit elit non fugiat dolor Lorem sunt deserunt commodo esse do. Elit ullamco ad dolor nulla id laborum occaecat. Eiusmod exercitation ipsum nostrud cillum occaecat sint quis magna irure cupidatat adipisicing consequat nulla qui.',
            { autoClose: false, status: ToastStatuses.INFO }
          )
        }
      >
        Create
      </button>
      <Suspense fallback='Loading ...'>{appRoutes}</Suspense>
    </div>
  );
}

export default App;
