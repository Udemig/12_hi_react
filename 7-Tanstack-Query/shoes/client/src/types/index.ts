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

interface IShoe {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  updatedAt: string;
}

interface IShoeFormValues {
  name: string;
  price: string;
  discount: string;
  color: string;
  size: string;
  isNew: boolean;
  description: string;
  gender: string;
}

export type {
  ILoginValues,
  IRegisterValues,
  IUser,
  IUserResponse,
  IShoe,
  IShoeFormValues,
};
