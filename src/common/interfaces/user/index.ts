interface IUserCommon {
  fullName: string;
  email: string;
  password: string;
}
interface IEditUser extends Omit<IUserCommon, "password"> {
  id: number;
  updatedBy: number;
}
interface ICreateUser extends IUserCommon {}
export type { IEditUser, ICreateUser };
