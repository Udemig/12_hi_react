import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import Loader from "./loader";

// Protected component'ı içerisine alınan route'lara sadece oturumu açık olan kullanıcılar erişebilecek
const Protected = () => {
  // aktif kullanıcı (oturumu açık) state'i
  const [user, setUser] = useState(undefined);

  // aktif kullanıcı verisini al
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });
  }, []);

  // kullanıcı verisi yükleiyorsa loader bas
  if (user === undefined) return <Loader />;

  // kullanıcı oturumu kapalıysa logine yönlendir
  if (user === null) return <Navigate to="/" replace />;

  // kullanıcı oturumu açıksa ilgili sayfayı göster
  // Kapsayıcı (Parent) route içerisinde Alt (Child) route'un elementini ekrana bas
  return <Outlet context={user} />;
};

export default Protected;
