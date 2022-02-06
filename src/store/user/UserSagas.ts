import { all, call, put, takeLatest } from 'redux-saga/effects';
import { userActionsTypes } from './UserActions';
import UserService from '@shared/services/user/user.service';
import { User } from '@shared/services/user/user.models';
import { BaseApiRes } from '@shared/services/base/base.models';
import { userActions } from './UserSlice';

export function* fetchUserSaga() {
  try {
    yield put(userActions.fetchUser())
    const response: BaseApiRes<User> = yield call(UserService.getUser);
    yield put(userActions.fetchUserSuccess(response.data));
  } catch (err) {
    yield put(userActions.fetchUserError())
  }
}

export function* UserSagas() {
  yield all([
    takeLatest(userActionsTypes.FETCH_USER, fetchUserSaga)
  ]);
}