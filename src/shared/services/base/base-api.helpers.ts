import appConfig from '@shared/configs/app.config';
import { Params } from '@shared/services/base/base.models';
import { AxiosRequestConfig, ResponseType } from 'axios';
import { getAccessToken } from '@utils/auth';

export const BaseApiHelpers = {
  /**
   * create default http headers for Content-Type, Accept and Authorization
   */
  createHeaders: (headersOverrides = {}) => {
    const headersObj = {
      'Content-Type': 'application/json',
      Accept: '*/*',
    };

    const token = getAccessToken();
    if (token) {
      // @ts-ignore
      headersObj[appConfig.auth.serverAuthKey] = `Bearer ${token}`;
    }

    return { ...headersObj, ...headersOverrides };
  },
  /**
   * prepare axios config
   */
  prepareAxiosReqConfig: (
    params?: Params,
    headers = {},
    responseType?: ResponseType,
    config?: AxiosRequestConfig
  ): AxiosRequestConfig => {
    const configToPass = {
      headers: headers ? { ...headers } : {},
      params,
      responseType: responseType || 'json',
      ...config,
    };
    return configToPass;
  },
};

export default BaseApiHelpers;
