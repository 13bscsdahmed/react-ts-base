import React from 'react';
import './App.scss';
import { useRoutes } from 'react-router';
import AppRoutes from './App.routes';

function App() {
  let appRoutes = useRoutes(AppRoutes);
  return (
    <div>
      {appRoutes}
    </div>
  );
}

export default App;
