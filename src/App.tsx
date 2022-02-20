import './locales/i18n';
import { Suspense, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router';
import { injectReducers } from '@store/store';
import { storeConfig } from '@store/store.config';
import ConfigSlice from '@store/slices/config/ConfigSlice';
import { useDispatch } from 'react-redux';
import { configActionTypes } from '@store/slices';
import Routes from './routes';

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
			<Suspense fallback='Loading ...'>{appRoutes}</Suspense>
		</div>
	);
}

export default App;
