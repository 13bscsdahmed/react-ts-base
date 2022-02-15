import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { storeConfig } from '@store/store.config';
import { Todo } from '@shared/services/todo/todo.models';

type AppConfigState = {
  config: Todo[] | null,
  loading: boolean,
  error: boolean,
}

const initialState: AppConfigState = {
  config: null,
  loading: false,
  error: false
}

const configSlice = createSlice({
  name: storeConfig.slices.config,
  initialState: initialState,
  reducers: {
    fetchConfig: (state) => {
      state.loading = true
    },
    fetchConfigSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.config = action.payload;
      state.loading = false;
    },
    fetchConfigError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const configActions = configSlice.actions;
const self = (state: RootState) => state?.[storeConfig.slices.config];
export const getMemoizedConfig = createSelector(
  self,
  (data) => {
    return data?.config;
  }
)

export default configSlice;
