import { FC, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { todoActionTypes } from '@store/slices';
import { injectReducers, ejectReducers } from '@store/store';
import { storeConfig } from '@store/store.config';
import todoSlice from '@store/slices/todos/TodoSlice';

export const Dashboard: FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    injectReducers([storeConfig.slices.todos], [todoSlice.reducer]);
    dispatch({ type: todoActionTypes.FETCH_TODOS });
  }, []);
  return (
    <>
      <div>this is dashboard div</div>
      <Link to='/login'>Link to login</Link>
      <Outlet />
    </>
  );
};

export default Dashboard;
