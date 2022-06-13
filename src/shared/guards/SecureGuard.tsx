import { ReactNode, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActionsTypes } from '@store/slices';
import { useNavigate } from 'react-router-dom';
import { injectReducers } from '@store/reducers';
import { storeConfig } from '@store/store.config';
import userSlice from '@store/slices/user/UserSlice';
import { RootState } from '@store/store';

interface SecureGuardProps {
  children: ReactNode;
}

const SecureGuard = (props: SecureGuardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user?.loading);
  useEffect(() => {
    injectReducers([storeConfig.slices.user], [userSlice.reducer]);
    dispatch({ type: userActionsTypes.FETCH_USER_PROFILE, payload: { navigate } });
  }, [dispatch]);

  return loading ? <p>...Loading</p> : (props.children as ReactElement);
};

export default SecureGuard;
