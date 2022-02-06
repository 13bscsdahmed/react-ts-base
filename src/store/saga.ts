import { all, fork } from 'redux-saga/effects';
import { UserSagas } from './user/UserSagas';

// watcher saga
export default function* rootSaga() {
  yield all([fork(UserSagas)]);
}