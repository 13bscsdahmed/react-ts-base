import { ReactNode, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActionsTypes } from '@store/slices';
import { useNavigate } from 'react-router-dom';

interface SecureGuardProps {
  children: ReactNode;
}

const AuthGuard = (props: SecureGuardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: userActionsTypes.FETCH_USER_PROFILE, payload: { navigate } });
  }, [dispatch]);
  return props.children as ReactElement;
};

export default AuthGuard;
