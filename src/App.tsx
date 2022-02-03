import './locales/i18n';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import Routes from './routes';
import UserService from '@shared/services/user/user.service';


function App() {
  let appRoutes = useRoutes(Routes);
  UserService.getUser();
  return (
    <div className='main'>
      <Suspense fallback="Loading ...">
        {appRoutes}
      </Suspense>
    </div>
  );
}

export default App;
