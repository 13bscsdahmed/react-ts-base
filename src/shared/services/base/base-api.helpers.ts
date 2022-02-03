import appConfig from '@shared/configs/app.config';

export const BaseApiHelpers = {
  /**
   * Get access token from local storage
   */
  getAccessToken: () => {
    try {
      return localStorage.getItem(appConfig.auth.clientAuthKey);
    } catch (error) {
      console.log(2);
      return null;
    }
  },
  /**
   * create default http headers for Content-Type, Accept and Authorization
   */
  createHeaders: (headersOverrides = {}) => {
    const headersObj = {
      'Content-Type': 'application/json',
      Accept: '*/*',
    };

    const token = BaseApiHelpers.getAccessToken();
    console.log(token);
    if (token) {
      // @ts-ignore
      headersObj[appConfig.auth.serverAuthKey] = token;
    }

    Object.assign(headersObj, headersOverrides);

    return headersObj;
  }
}

export default BaseApiHelpers;