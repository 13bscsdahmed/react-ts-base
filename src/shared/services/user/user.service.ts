import BaseApiService from '@shared/services/base/base-api.service';

const baseUrl = 'users';

export const UserService = {
  getUser: () => {
    BaseApiService.get(baseUrl).then((data) => {
      console.log('data', data)
    }).catch((error) => {
      console.log('error', error);
    })
  }
}

export default UserService;