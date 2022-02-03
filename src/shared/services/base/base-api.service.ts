import axios, { AxiosRequestConfig, ResponseType } from 'axios';
import { BaseApiRes, Params } from '@shared/services/base/base.models';
import BaseApiHelpers from '@shared/services/base/base-api.helpers';

let BaseApiAxiosInstance =  axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}:${+(process.env.REACT_APP_BASE_API_PORT ?? 3000)}`,
  timeout: +(process.env.REACT_APP_BASE_API_TIMEOUT ?? 5000)
});


BaseApiAxiosInstance.interceptors.request.use(req => {
    req.headers = BaseApiHelpers.createHeaders(req.headers);
    return req;
  },error => {
    return Promise.reject(error);
  }
);


export const BaseApiService = {
  get: (url: string, params?: Params, headers = {}, responseType?: ResponseType, config?: AxiosRequestConfig): Promise<BaseApiRes<any>> => {
    return BaseApiAxiosInstance.get(url, BaseApiHelpers.prepareAxiosReqConfig(params, headers, responseType, config))
  },
  post: (url: string, body: any, params?: Params, headers = {}, responseType?: ResponseType, config?: AxiosRequestConfig): Promise<BaseApiRes<any>> => {
    return BaseApiAxiosInstance.post(url, body, BaseApiHelpers.prepareAxiosReqConfig(params, headers, responseType, config))
  },
  put: (url: string, body: any, params?: Params, headers = {}, responseType?: ResponseType, config?: AxiosRequestConfig): Promise<BaseApiRes<any>> => {
    return BaseApiAxiosInstance.put(url, body, BaseApiHelpers.prepareAxiosReqConfig(params, headers, responseType, config))
  },
  patch: (url: string, body: any, params?: Params, headers = {}, responseType?: ResponseType, config?: AxiosRequestConfig): Promise<BaseApiRes<any>> => {
    return BaseApiAxiosInstance.patch(url, body, BaseApiHelpers.prepareAxiosReqConfig(params, headers, responseType, config))
  },
  delete: (url: string, params?: Params, headers = {}, responseType?: ResponseType, config?: AxiosRequestConfig): Promise<BaseApiRes<any>> => {
    return BaseApiAxiosInstance.delete(url, BaseApiHelpers.prepareAxiosReqConfig(params, headers, responseType, config))
  }
}

export default BaseApiService;