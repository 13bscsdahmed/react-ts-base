import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { User } from '@shared/services/user/user.models';
import { RootState } from '@store/index';
import { storeConfig } from '@store/store.config';

type UserState = {
  user: User | null,
  loading: boolean,
  error: boolean,
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: false
}

const userSlice = createSlice({
  name: storeConfig.slices.user,
  initialState: initialState,
  reducers: {
    fetchUser: (state) => {
      state.loading = true
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    fetchUserError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const userActions = userSlice.actions;
const self = (state: RootState) => state?.user
export const getMemoizedUser = createSelector(
  self,
  (data) => {
    return data?.user;
  }
)

export default userSlice;
