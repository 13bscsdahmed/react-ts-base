import { AxiosResponse } from 'axios';
import BaseApiService from '@shared/services/base/base-api.service';
import { BaseApiRes } from '@shared/services/base/base.models';
import { Todo } from '@shared/services/todo/todo.models';

const baseUrl = 'todo';

export const TodoService = {
  getTodos: (): Promise<AxiosResponse<BaseApiRes<Todo[]>>> => {
    return BaseApiService.get(`${baseUrl}`);
  },
};

export default TodoService;
