import { combineReducers } from 'redux'
import store from '@store/store';
import { Reducer } from '@reduxjs/toolkit';

export interface AsyncReducer {
  [key: string]: Reducer
}

const asyncReducers:AsyncReducer = {};

export const injectReducers = (keys: string[], reducers: Reducer[]) => {
  let keysUpdated = false;
  keys.forEach((key, index) => {
    if (!asyncReducers[key]) {
      asyncReducers[key] = reducers[index];
      keysUpdated = true;
    }
    if (keysUpdated) {
      store.replaceReducer(createReducer({...asyncReducers}));
    }
  })

}

export const ejectReducers = (keys: string[]) => {
  let keysUpdated = false;
  keys.forEach((key) => {
    if (asyncReducers[key]) {
      delete asyncReducers[key];
      keysUpdated = true;
    }
  })
  if (keysUpdated) {
    store.replaceReducer(createReducer({...asyncReducers}));
  }
}

const createReducer = (asyncReducers: AsyncReducer) => {
  return combineReducers({...asyncReducers})
}