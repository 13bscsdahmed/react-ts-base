import React from 'react';
import { useRoutes } from 'react-router';
import Routes from './routes';

function App() {
  let appRoutes = useRoutes(Routes);
  return (
    <div>
      {appRoutes}
    </div>
  );
}

export default App;
