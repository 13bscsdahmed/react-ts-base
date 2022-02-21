import { FC, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoizedUser, userActionsTypes } from '@store/slices';
import { injectReducers, ejectReducers, RootState } from '@store/store';
import { storeConfig } from '@store/store.config';
import userSlice from '@store/slices/user/UserSlice';
import Input from '@shared/components/formElements/input/Input';
import { Auth } from '@shared/services/auth/auth.model';
import AuthService from '@shared/services/auth/auth.service';
import LoginForm from '@modules/public/components/LoginForm';
import classes from './Login.module.css';
import { routesConfig } from '@shared/configs/routes.config';

const Login: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user?.isLoggedIn);
  const userMemoized = useSelector(getMemoizedUser);
  // const user = useSelector((state: RootState) => state?.[storeConfig.slices?.user]);

  // console.log('user', user);
  console.log('user memoized', userMemoized);
  useEffect(() => {
    injectReducers([storeConfig.slices.user], [userSlice.reducer]);
  }, []);

  const loginHandler = (user: Auth) => {
    console.log('user', user);
    dispatch({ type: userActionsTypes.LOGIN, payload: { user, url: `/${routesConfig.dashboard.root}`, navigate } });
  };
  return (
    <div className={classes['login-container']}>
      This is the login div
      <Link to='/dashboard'>Link to dashboard</Link>
      <LoginForm onLogin={loginHandler} />
    </div>
  );
};
export default Login;
