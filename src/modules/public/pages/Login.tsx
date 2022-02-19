import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoizedUser, userActionsTypes } from '@store/slices';
import { injectReducers, ejectReducers } from '@store/store';
import { storeConfig } from '@store/store.config';
import userSlice from '@store/slices/user/UserSlice';
import Input from '@shared/components/formElements/input/Input';
import { Auth } from '@shared/services/auth/auth.model';
import AuthService from '@shared/services/auth/auth.service';
import LoginForm from '@modules/public/components/LoginForm';

const Login: FC<{}> = () => {
  const dispatch = useDispatch();
  const userMemoized = useSelector(getMemoizedUser);
  // const user = useSelector((state: RootState) => state?.[storeConfig.slices?.user]);

  // console.log('user', user);
  console.log('user memoized', userMemoized);
  useEffect(() => {
    injectReducers([storeConfig.slices.user], [userSlice.reducer]);
    return () => {
      // TODO: Find way to remove reducer
      ejectReducers([storeConfig.slices.user]);
    }
  }, []);
  const loginHandler = (user: Auth) => {
    console.log('user', user);
    dispatch({type: userActionsTypes.LOGIN , payload: user});
  }
  return (
    <>
      <div>This is the login div</div>
      <Link to='/dashboard'>Link to dashboard</Link>

      <div className='login-container'>
        <LoginForm onLogin={loginHandler}/>
      </div>

    </>
  )
}
export default Login;