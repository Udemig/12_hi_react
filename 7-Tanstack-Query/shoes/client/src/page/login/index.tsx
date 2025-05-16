import type { FC } from "react";
import { Formik, Form } from "formik";
import Input from "../../components/form/input";
import { initialLoginValues } from "../../utils/constants";
import type { ILoginValues } from "../../types";
import { Link } from "react-router-dom";
import { loginSchema } from "../../utils/schema";
import useAuth from "../../service/auth";

const Login: FC = () => {
  const { login } = useAuth();

  // form gönderilince: hesaba giriş yap
  const handleSubmit = (values: ILoginValues) => {
    login.mutate(values);
  };

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="/logo.svg" alt="KICKS" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Hesabınıza Giriş Yapın
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialLoginValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-8">
            <Input label="Email" name="email" type="email" />
            <Input label="Şifre" name="password" type="text" />

            <div>
              <button
                type="submit"
                disabled={login.isPending}
                className="disabled:opacity-50 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 cursor-pointer"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız yok mu?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Üye Ol
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
