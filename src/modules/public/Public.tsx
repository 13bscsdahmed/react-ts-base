import { FC } from 'react';
import i18next from 'i18next';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActionsTypes } from '../../store/user/UserActions';

const Public: FC<{}> = () => {
  const dispatch = useDispatch();
  dispatch({type: userActionsTypes.FETCH_USER});
  return (
    <>
      <div className='public'>Public {i18next.t('test')}</div>
      <Outlet/>
    </>
  )
}

export default Public