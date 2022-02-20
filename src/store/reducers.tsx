import { combineReducers } from 'redux';
import store from '@store/store';
import { Reducer } from '@reduxjs/toolkit';

export interface AsyncReducer {
	[key: string]: Reducer;
}

const asyncReducers: AsyncReducer = {};

const createReducer = (asyncReducersObject: AsyncReducer) => {
	return combineReducers({ ...asyncReducersObject });
};

export const injectReducers = (keys: string[], reducers: Reducer[]) => {
	let keysUpdated = false;
	keys.forEach((key, index) => {
		if (!asyncReducers[key]) {
			asyncReducers[key] = reducers[index];
			keysUpdated = true;
		}
		if (keysUpdated) {
			store.replaceReducer(createReducer({ ...asyncReducers }));
		}
	});
};

// Use this only in extreme cases where you need to eject a big part of state as this is the recommended approach by the React team and not on every part of slice
export const ejectReducers = (keys: string[]) => {
	let keysUpdated = false;
	keys.forEach(key => {
		if (asyncReducers[key]) {
			delete asyncReducers[key];
			keysUpdated = true;
		}
	});
	if (keysUpdated) {
		store.replaceReducer(createReducer({ ...asyncReducers }));
	}
};
