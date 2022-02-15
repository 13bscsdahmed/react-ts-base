import { combineReducers } from 'redux'
import store from '@store/store';
import { Reducer } from '@reduxjs/toolkit';

export interface AsyncReducer {
  [key: string]: Reducer
}

const asyncReducers:AsyncReducer = {};

export const injectReducer = (key: string, reducer: Reducer) => {
  if (!asyncReducers[key]) {
    asyncReducers[key] = reducer;
    store.replaceReducer(createReducer({...asyncReducers}))
  }
}

export const removeReducer = (key: string) => {
  if (asyncReducers[key]) {
    delete asyncReducers[key];
    store.replaceReducer(createReducer({...asyncReducers}));
  }
}

const createReducer = (asyncReducers: AsyncReducer) => {
  return combineReducers({...asyncReducers})
}