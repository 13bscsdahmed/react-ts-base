import createSagaMiddleware from 'redux-saga';
import { configureStore, Reducer } from '@reduxjs/toolkit';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);



export default store;
export type RootState = ReturnType<typeof store.getState>
export * from './reducers';