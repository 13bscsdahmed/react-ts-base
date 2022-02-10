import { FC, useEffect } from 'react';
import i18next from 'i18next';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActionsTypes } from '@store/user';
import { getMemoizedUser } from '@store/user/UserSlice';
import { RootState } from '@store/index';
import { storeConfig } from '@store/store.config';

const Public: FC<{}> = () => {
  const dispatch = useDispatch();
  const userMemoized = useSelector(getMemoizedUser);
  const user = useSelector((state: RootState) => state?.[storeConfig.slices?.user]);

  console.log('user', user);
  console.log('user memoized', userMemoized);
  useEffect(() => {
    dispatch({type: userActionsTypes.FETCH_USER});
    return () => {
      // TODO: Find way to remove reducer
    }
  }, []);
  return (
    <>
      <div className='public'>Public {i18next.t('test')}</div>
      <Outlet/>
    </>
  )
}

export default Public