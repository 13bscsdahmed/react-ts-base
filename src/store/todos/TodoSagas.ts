import { all, call, put, takeLatest } from 'redux-saga/effects';
import { todoActionTypes } from '@store/todos/TodoActions';
import TodoService from '@shared/services/todo/todo.service';
import { BaseApiRes } from '@shared/services/base/base.models';
import { todoActions } from '@store/todos/TodoSlice';
import { Todo } from '@shared/services/todo/todo.models';
import { AxiosResponse } from 'axios';

export function* fetchTodoSaga() {
  try {
    yield put(todoActions.fetchTodos())
    const response: AxiosResponse<BaseApiRes<Todo[]>> = yield call(TodoService.getTodos);
    console.log('todo res', response);
    yield put(todoActions.fetchTodosSuccess(response.data.data));
  } catch (err) {
    yield put(todoActions.fetchTodosError())
  }
}

export function* TodoSagas() {
  yield all([
    takeLatest(todoActionTypes.FETCH_TODOS, fetchTodoSaga)
  ]);
}