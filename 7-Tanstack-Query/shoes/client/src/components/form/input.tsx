import { ErrorMessage, Field } from "formik";
import type { FC } from "react";

interface IInputProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

const Input: FC<IInputProps> = ({ label, name, type, required = true }) => {
  return (
    <div
      className={`relative ${
        type === "checkbox" ? "flex items-center gap-2" : ""
      }`}
    >
      <label htmlFor={name} className="text-sm/6 font-semibold text-gray-900">
        {label}
      </label>

      <div className={`${type === "checkbox" ? "ml-2 mt-1" : ""}`}>
        <Field
          id={name}
          name={name}
          autoComplete={name}
          required={required}
          type={type}
          as={type === "textarea" ? "textarea" : "input"}
          className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm/6"
        />

        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm absolute bottom-[-22px]"
        />
      </div>
    </div>
  );
};

export default Input;
