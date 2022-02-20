import { AxiosResponse } from 'axios';
import BaseApiService from '@shared/services/base/base-api.service';
import { BaseApiRes } from '@shared/services/base/base.models';
import { User } from '@shared/services/user/user.models';

const baseUrl = 'user';

export const UserService = {
	getUser: (id: string): Promise<AxiosResponse<BaseApiRes<User>>> => {
		return BaseApiService.get(`${baseUrl}/5f61f7b30f1fe63b79678085`);
	},
};

export default UserService;
