import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@shared/services/user/user.models';

type UserState = {
  user: User | null,
  loading: boolean,
  error: boolean
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: false
}

const userSlice = createSlice({
  name: 'user',
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

export default userSlice;
