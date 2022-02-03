import axios from 'axios';
import { Params, ResponseTypes } from '@shared/services/base/base.models';
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
  get: (url: string, params?: Params, headersOverrides = {}, responseType: ResponseTypes = ResponseTypes.json) => {
    const config = {
      headers: { ...headersOverrides },
      params,
      responseType
    };
    return BaseApiAxiosInstance.get(url, config)
  },
  post: () => {

  },
  put: () => {

  },
  delete: () => {

  }
}

export default BaseApiService;