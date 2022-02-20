import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { User } from '@shared/services/user/user.models';
import { RootState } from '@store/store';
import { storeConfig } from '@store/store.config';

export type UserState = {
	user: User | null;
	loading: boolean;
	error: boolean;
};

const initialState: UserState = {
	user: null,
	loading: false,
	error: false,
};

const userSlice = createSlice({
	name: storeConfig.slices.user,
	initialState,
	reducers: {
		login: state => {
			state.loading = true;
		},
		loginSuccess: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.error = false;
			state.loading = false;
		},
		loginError: state => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const userActions = userSlice.actions;
const self = (state: RootState) => state?.user;
export const getMemoizedUser = createSelector(self, data => {
	return data?.user;
});

export default userSlice;
