import { FC, useEffect } from 'react';
import i18next from 'i18next';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActionsTypes } from '@store/user';
import { getMemoizedUser } from '@store/user/UserSlice';
import { removeReducer, RootState } from '@store/index';
import { storeConfig } from '@store/store.config';

const Public: FC<{}> = () => {
  return (
    <>
      <div className='public'>Public {i18next.t('test')}</div>
      <Outlet/>
    </>
  )
}

export default Public