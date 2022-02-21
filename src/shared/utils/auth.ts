import appConfig from '@shared/configs/app.config';
import jwt from 'jwt-decode';
import { User } from '@shared/services/user/user.models';

export const setAccessToken = (token: string) => {
  localStorage.setItem(appConfig.auth.clientAuthKey, token);
};

export const clearAccessToken = () => {
  localStorage.removeItem(appConfig.auth.clientAuthKey);
};

/**
 * Get access token from local storage
 */
export const getAccessToken = () => {
  try {
    return localStorage.getItem(appConfig.auth.clientAuthKey);
  } catch (error) {
    return null;
  }
};

/**
 * Get access token from local storage
 */
export const getDecodedAccessToken = (): User | null => {
  try {
    const token = localStorage.getItem(appConfig.auth.clientAuthKey);
    return token ? jwt(token) : null;
  } catch (error) {
    return null;
  }
};
