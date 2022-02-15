import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoizedUser, userActionsTypes } from '@store/user';
import { injectReducer, removeReducer } from '@store/index';
import { storeConfig } from '@store/store.config';
import userSlice from '@store/user/UserSlice';

export const Login: FC<{}> = () => {
  const dispatch = useDispatch();
  const userMemoized = useSelector(getMemoizedUser);
  // const user = useSelector((state: RootState) => state?.[storeConfig.slices?.user]);

  // console.log('user', user);
  console.log('user memoized', userMemoized);
  useEffect(() => {
    injectReducer(storeConfig.slices.user, userSlice.reducer);
    dispatch({type: userActionsTypes.FETCH_USER});
    return () => {
      // TODO: Find way to remove reducer
      removeReducer(storeConfig.slices.user);
    }
  }, []);
  return (
    <>
      <div>This is the login div</div>
      <Link to='/dashboard'>Link to dashboard</Link>
    </>
  )
}
export default Login;