import type { ILoginValues, IRegisterValues } from "../types";

const initialLoginValues: ILoginValues = {
  email: "",
  password: "",
};

const initialRegisterValues: IRegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export { initialLoginValues, initialRegisterValues };
