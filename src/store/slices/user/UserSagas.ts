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
import { clearAccessToken, getDecodedAccessToken, setAccessToken } from '@utils/auth';
import { NavigateFunction } from 'react-router';
import { routesConfig } from '@shared/configs/routes.config';

export function* loginSaga(action: SagaAction<{ user: Auth; url: string; navigate: NavigateFunction }>) {
  try {
    yield put(userActions.login());
    const auth: AxiosResponse<BaseApiRes<User>> = yield call(AuthService.login.bind(null, action.payload.user));
    setAccessToken(auth.headers.access_token);
    action.payload?.navigate(action.payload.url);
  } catch (err) {
    yield put(userActions.loginError());
  }
}

export function* fetchUserProfileSaga(action: SagaAction<{ navigate: NavigateFunction }>) {
  try {
    const user = getDecodedAccessToken();
    if (user) {
      const response: AxiosResponse<BaseApiRes<User>> = yield call(UserService.getUser.bind(null, user._id));
      yield put(userActions.loginSuccess(response.data.data));
      action.payload?.navigate(`/${routesConfig.dashboard.root}`);
    } else {
      clearAccessToken();
      action.payload?.navigate(routesConfig.public.login);
    }
  } catch (err) {
    yield put(userActions.loginError());
    action.payload?.navigate(routesConfig.public.login);
  }
}

export function* UserSagas() {
  yield all([
    takeLatest(userActionsTypes.LOGIN, loginSaga),
    takeLatest(userActionsTypes.FETCH_USER_PROFILE, fetchUserProfileSaga),
  ]);
}
