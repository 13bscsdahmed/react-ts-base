import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './saga';
import { rootSliceGroup } from '@vmw/slices-for-redux';

const sagaMiddleware = createSagaMiddleware();

// Package used for adding dynamic reducers when required
rootSliceGroup.addReducers({});


const store = configureStore({
  reducer: rootSliceGroup.reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch