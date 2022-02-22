import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoizedUser, userActionsTypes } from '@store/slices';
import { Auth } from '@shared/services/auth/auth.model';
import LoginForm from '@modules/public/components/LoginForm';
import classes from './Login.module.css';
import { routesConfig } from '@shared/configs/routes.config';

const Login: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userMemoized = useSelector(getMemoizedUser);

  console.log('user memoized', userMemoized);
  useEffect(() => {}, []);

  const loginHandler = (user: Auth) => {
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
