import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/UserSlice';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ui: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);


export default store;