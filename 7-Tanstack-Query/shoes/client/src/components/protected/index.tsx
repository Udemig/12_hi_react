import type { FC } from "react";
import useUser from "../../service/user";
import Loader from "../loader";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header";

interface Props {
  allowedRoles?: string[];
}

const Protected: FC<Props> = ({ allowedRoles }) => {
  // oturumu açık olan kullanıcnın verilerini al
  const { user, isLoading } = useUser();

  // kullanıcı verileri yüklenirken loader göster
  if (isLoading) return <Loader />;

  // eğer rolü yetersizse login sayfasına yönlendir
  if (allowedRoles && !allowedRoles?.includes(user?.role))
    return <Navigate to="/" replace />;

  // kullanıcı oturumu açıksa sayfa içeriğini göster
  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );

  // kullanıcı oturumu kapalıysa login sayfasına yönlendir
  return <Navigate to="/login" replace />;
};

export default Protected;
