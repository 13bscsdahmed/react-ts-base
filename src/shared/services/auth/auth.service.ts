import { AxiosResponse } from 'axios';
import BaseApiService from '@shared/services/base/base-api.service';
import { BaseApiRes } from '@shared/services/base/base.models';
import { Auth } from '@shared/services/auth/auth.model';

const baseUrl = 'auth';

export const AuthService = {
  login: (user: Auth): Promise<AxiosResponse<BaseApiRes<{}>>> => {
    return BaseApiService.post(`${baseUrl}`, user);
  }
}

export default AuthService;