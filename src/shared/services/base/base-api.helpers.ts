import appConfig from '@shared/configs/app.config';
import { Params } from '@shared/services/base/base.models';
import { AxiosRequestConfig, ResponseType } from 'axios';

export const BaseApiHelpers = {
  /**
   * Get access token from local storage
   */
  getAccessToken: () => {
    try {
      return localStorage.getItem(appConfig.auth.clientAuthKey);
    } catch (error) {
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
    if (token) {
      // @ts-ignore
      headersObj[appConfig.auth.serverAuthKey] = token;
    }

    return { ...headersObj, ...headersOverrides };
  },
  /**
   * prepare axios config
   */
  prepareAxiosReqConfig: (params?: Params, headers = {}, responseType?: ResponseType, config?: AxiosRequestConfig): AxiosRequestConfig => {
    const configToPass = {
      headers: headers ? { ...headers }: {},
      params,
      responseType: responseType ? responseType: 'json',
      ...config
    };
    return configToPass
  }
}

export default BaseApiHelpers;