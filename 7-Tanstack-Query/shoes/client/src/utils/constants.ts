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

const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

const colorList = [
  { code: "#4A69E2", id: "mutate" },
  { code: "#DC143C", id: "red" },
  { code: "#FFA52F", id: "yellow" },
  { code: "#232321", id: "black" },
  { code: "#234D41", id: "green" },
  { code: "#353336", id: "dark-gray" },
  { code: "#F08155", id: "orange" },
  { code: "#C9CCC6", id: "light-gray" },
  { code: "#677282", id: "gray" },
  { code: "#925513", id: "brown" },
  { code: "#BB8056", id: "light-brown" },
];

const inputArray = [
  {
    label: "İsim",
    name: "name",
    type: "text",
  },
  {
    label: "Fiyat",
    name: "price",
    type: "number",
  },
  {
    label: "İndirim",
    name: "discount",
    type: "number",
  },
  {
    label: "Renk",
    name: "color",
    type: "text",
  },
  {
    label: "Beden",
    name: "size",
    type: "text",
  },
  {
    label: "Açıklama",
    name: "description",
    type: "textarea",
  },
  {
    label: "Yeni Ürün",
    name: "isNew",
    type: "checkbox",
  },
];

export {
  initialLoginValues,
  initialRegisterValues,
  numbers,
  colorList,
  inputArray,
};
