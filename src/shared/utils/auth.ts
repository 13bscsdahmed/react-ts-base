import appConfig from '@shared/configs/app.config';

export const setAccessToken = (token: string) => {
  localStorage.setItem(appConfig.auth.clientAuthKey, token);
}

/**
 * Get access token from local storage
 */
export const getAccessToken = () => {
  try {
    return localStorage.getItem(appConfig.auth.clientAuthKey);
  } catch (error) {
    return null;
  }
}