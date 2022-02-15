import { FC, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { todoActionTypes } from '@store/todos';
import { injectReducer, removeReducer } from '@store/index';
import { storeConfig } from '@store/store.config';
import todoSlice from '@store/todos/TodoSlice';

export const Dashboard: FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    injectReducer(storeConfig.slices.todos, todoSlice.reducer);
    dispatch({type: todoActionTypes.FETCH_TODOS});
    return () => {
      removeReducer(storeConfig.slices.todos);
    }
  }, []);
  return (
    <>
      <div>this is dashboard div</div>
      <Link to='/login'>Link to login</Link>
      <Outlet/>
    </>
  )
}

export default Dashboard;