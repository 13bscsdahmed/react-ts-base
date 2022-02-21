import { createSlice, PayloadAction, createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { storeConfig } from '@store/store.config';
import { Todo } from '@shared/services/todo/todo.models';

const todosAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (todo: Todo) => todo._id,
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
const self = (state: RootState) => state?.[storeConfig.slices.todos];
export const getMemoizedTodos = createSelector(self, data => {
  return data?.todos;
});

export const todosEntitySelectors = todosAdapter.getSelectors((state: RootState) => state.todos);
export default todoSlice;
