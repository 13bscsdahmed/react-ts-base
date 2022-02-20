export enum UserType {
	admin = 'ADMIN',
	user = 'USER',
}

export interface User {
	_id: string;
	firstName: string;
	lastName: string;
	userType: UserType;
}
