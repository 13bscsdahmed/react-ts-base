import { ReactNode, ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@store/store';
import { getDecodedAccessToken } from '@utils/auth';
import { routesConfig } from '@shared/configs/routes.config';

interface SecureGuardProps {
  children: ReactNode;
}

const PublicGuard = (props: SecureGuardProps) => {
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.user?.loading);
  useEffect(() => {
    if (getDecodedAccessToken()) {
      navigate(routesConfig.dashboard.root);
    }
  }, [navigate]);

  return loading ? <p>...Loading</p> : (props.children as ReactElement);
};

export default PublicGuard;
