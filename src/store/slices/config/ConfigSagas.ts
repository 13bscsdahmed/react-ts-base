import { all, call, put, takeLatest } from 'redux-saga/effects';
import TodoService from '@shared/services/todo/todo.service';
import { BaseApiRes } from '@shared/services/base/base.models';
import { Todo } from '@shared/services/todo/todo.models';
import { AxiosResponse } from 'axios';
import { configActionTypes } from '@store/slices/config/ConfigActions';
import { configActions } from '@store/slices/config/ConfigSlice';

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