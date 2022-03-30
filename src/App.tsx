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
            'Proident quis ea cupidatat exercitation voluptate ea exercitation incididunt in nostrud. Adipisicing ut est enim qui elit enim eu quis Lorem nostrud incididunt enim. Nostrud excepteur ut tempor consectetur sunt proident ex mollit eu veniam esse duis amet. Irure sunt elit sit amet voluptate exercitation. Officia officia sit sunt commodo Lorem ut et ex.',
            { status: ToastStatuses.ERROR }
          )
        }
      >
        Error Toast
      </button>

      <button
        type='button'
        onClick={() =>
          toastController.show(
            'Quis cillum aute qui commodo qui consectetur sint proident. Quis est aute culpa eiusmod Lorem sint. Lorem officia sit fugiat eu. Eu officia laboris enim id labore quis est ex non aute velit veniam cupidatat id. Ipsum esse cupidatat magna eu elit officia. Non elit exercitation reprehenderit veniam in labore irure pariatur sint cillum occaecat mollit laborum dolore. Incididunt magna eiusmod amet reprehenderit commodo nostrud cillum ut veniam consectetur excepteur.',
            { status: ToastStatuses.INFO }
          )
        }
      >
        Info Toast
      </button>

      <button
        type='button'
        onClick={() =>
          toastController.show(
            'Fugiat reprehenderit cillum consectetur Lorem labore dolore et irure cupidatat ea. Sunt ullamco minim irure magna Lorem. Duis consectetur in culpa nisi laboris cillum ex amet laboris incididunt ea incididunt. Labore aliqua non id magna adipisicing veniam eiusmod duis consequat.',
            { status: ToastStatuses.SUCCESS }
          )
        }
      >
        Suuccess Toast
      </button>
      <Suspense fallback='Loading ...'>{appRoutes}</Suspense>
    </div>
  );
}

export default App;
