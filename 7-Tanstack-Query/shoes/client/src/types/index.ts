interface ILoginValues {
  email: string;
  password: string;
}

interface IRegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IUserResponse {
  message: string;
  user: IUser;
}

export type { ILoginValues, IRegisterValues, IUser, IUserResponse };
