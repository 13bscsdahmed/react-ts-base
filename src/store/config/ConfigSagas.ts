import { all, call, put, takeLatest } from 'redux-saga/effects';
import { todoActionTypes } from '@store/todos/TodoActions';
import TodoService from '@shared/services/todo/todo.service';
import { BaseApiRes } from '@shared/services/base/base.models';
import { todoActions } from '@store/todos/TodoSlice';
import { Todo } from '@shared/services/todo/todo.models';
import { AxiosResponse } from 'axios';
import { configActionTypes } from '@store/config/ConfigActions';
import { configActions } from '@store/config/ConfigSlice';

export function* fetchConfigSaga() {
  try {
    yield put(configActions.fetchConfig())
    const response: AxiosResponse<BaseApiRes<Todo[]>> = yield call(TodoService.getTodos);
    yield put(configActions.fetchConfigSuccess(response.data.data));
  } catch (err) {
    yield put(configActions.fetchConfigError())
  }
}

export function* ConfigSagas() {
  yield all([
    takeLatest(configActionTypes.FETCH_CONFIG, fetchConfigSaga)
  ]);
}