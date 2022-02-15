import { all, fork } from 'redux-saga/effects';
import { UserSagas, TodoSagas, ConfigSagas } from '@store/slices';

export default function* rootSaga() {
  yield all(
    [
      fork(UserSagas),
      fork(TodoSagas),
      fork(ConfigSagas)
    ]
  );
}