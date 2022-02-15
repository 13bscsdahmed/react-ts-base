import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { storeConfig } from '@store/store.config';
import { Todo } from '@shared/services/todo/todo.models';

type TodoState = {
  todos: Todo[] | null,
  loading: boolean,
  error: boolean,
}

const initialState: TodoState = {
  todos: null,
  loading: false,
  error: false
}

const todoSlice = createSlice({
  name: storeConfig.slices.todos,
  initialState: initialState,
  reducers: {
    fetchTodos: (state) => {
      state.loading = true
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      state.loading = false;
    },
    fetchTodosError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const todoActions = todoSlice.actions;
const self = (state: RootState) => state?.[storeConfig.slices.todos];
export const getMemoizedTodos = createSelector(
  self,
  (data) => {
    return data?.todos;
  }
)

export default todoSlice;
