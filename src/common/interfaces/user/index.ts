interface IUserCommon {
  fullName: string;
  email: string;
  password: string;
}
interface IEditUser extends IUserCommon {
  id: number;
  updatedBy: string;
}
interface ICreateUser extends IUserCommon {}
export type { IEditUser, ICreateUser };
