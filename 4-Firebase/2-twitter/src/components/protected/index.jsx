import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import PageLoader from "../loader/page-loader";

const Protected = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // kullanıcı oturum versine abone ol
    const unsub = onAuthStateChanged(auth, (active_user) => setUser(active_user));

    // kullanıcı sayfaan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  // oturum verileri gelene kadar yükleniyor bas
  if (user === undefined) return <PageLoader />;

  // kullanıcının oturumu kapalıysa logine yönlendir
  if (user === null || user?.emailVerified === false) {
    if (user?.emailVerified === false) toast.info("Mailinizi doğrulayın");

    return <Navigate to="/" replace />;
  }

  // alt route'un element'ini ekrana bas
  return <Outlet context={user} />;
};

export default Protected;
