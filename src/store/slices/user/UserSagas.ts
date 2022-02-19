import { all, call, put, takeLatest } from 'redux-saga/effects';
import { userActionsTypes } from './UserActions';
import UserService from '@shared/services/user/user.service';
import { User } from '@shared/services/user/user.models';
import { BaseApiRes } from '@shared/services/base/base.models';
import { userActions } from './UserSlice';
import { AxiosResponse } from 'axios';
import AuthService from '@shared/services/auth/auth.service';
import { Auth } from '@shared/services/auth/auth.model';
import { SagaAction } from '@store/saga';
import { setAccessToken } from '@utils/auth';

export function* loginSaga(action: SagaAction<Auth>) {
  try {
    yield put(userActions.login())
    const auth: AxiosResponse<BaseApiRes<User>> = yield call(AuthService.login.bind(null, action.payload));
    setAccessToken(auth.headers.access_token);
    const response: AxiosResponse<BaseApiRes<User>> = yield call(UserService.getUser);
    yield put(userActions.loginSuccess(response.data.data));
  } catch (err) {
    yield put(userActions.loginError())
  }
}

export function* UserSagas() {
  yield all([
    takeLatest(userActionsTypes.LOGIN, loginSaga)
  ]);
}