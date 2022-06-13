import { createSlice, PayloadAction, createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import store, { RootState } from '@store/store';
import { storeConfig } from '@store/store.config';
import { Todo } from '@shared/services/todo/todo.models';

const todosAdapter = createEntityAdapter({
  selectId: (todo: Todo) => todo?._id,
});

const todoSlice = createSlice({
  name: storeConfig.slices.todos,
  initialState: todosAdapter.getInitialState({
    loading: false,
    error: false,
  }),
  reducers: {
    fetchTodos: state => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      todosAdapter.setAll(state, action.payload);
      state.loading = false;
    },
    fetchTodosError: state => {
      state.loading = false;
      state.error = true;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      todosAdapter.addOne(state, action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
const todosState = (state: RootState) => state?.[storeConfig.slices.todos];
export const getMemoizedTodos = createSelector(todosState, data => {
  return data?.todos;
});

export const {
  selectAll: selectAllTodos,
  selectIds: selectTodoIds,
  selectTotal: todosCount,
} = todosAdapter.getSelectors((state: RootState) => state?.todos);

export default todoSlice;
