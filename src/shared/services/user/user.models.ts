export interface User {
  _id: number;
  firstName: string;
  lastName: string;
  userType: UserType
}

export enum UserType {
  admin = 'ADMIN',
  user = 'USER'
}