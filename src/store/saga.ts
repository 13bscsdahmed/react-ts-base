import { all, fork } from 'redux-saga/effects';
import { UserSagas } from '@store/user';
import { TodoSagas } from '@store/todos';
import { ConfigSagas } from '@store/config';

export default function* rootSaga() {
  yield all([fork(UserSagas), fork(TodoSagas), fork(ConfigSagas)]);
}