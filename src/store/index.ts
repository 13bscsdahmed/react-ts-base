import createSagaMiddleware from 'redux-saga';
import { configureStore, Reducer } from '@reduxjs/toolkit';
import rootSaga from './saga';
import UserSlice from '@store/user/UserSlice';
import createReducer from '@store/reducers';
import { storeConfig } from '@store/store.config';
import ConfigSlice from '@store/config/ConfigSlice';

const sagaMiddleware = createSagaMiddleware();

export interface AsyncReducer {
  [key: string]: Reducer
}

const asyncReducers:AsyncReducer = {
  // [storeConfig.slices.config]: ConfigSlice.reducer
}



const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export const injectReducer = (key: string, reducer: Reducer) => {
  asyncReducers[key] = reducer;
  store.replaceReducer(createReducer({...asyncReducers}))
}

export const removeReducer = (key: string) => {
  delete asyncReducers[key];
  store.replaceReducer(createReducer({...asyncReducers}))
}

console.log('store', store.getState());


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch