import { HttpStatusCode } from '@shared/models/http.models';

export interface Params {
  [name: string]: any;
}

export interface BaseApiRes<t> {
  statusCode: HttpStatusCode;
  success: boolean;
  message: string;
  data: t;
}
