import { createContext } from "react";

// createContext ile context yapısının kurulumu yapılır.
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const name = "Ali";
  const surname = "Ağa";
  const adress = {
    city: "Malatya",
    countr: "Türkiye",
  };
  const selamla = () => {
    alert(`Udemig akademiden selamlar`);
  };
  return (
    //  Tüm uygulamayı sarmalayacak bir Hoc oluştur ve buna context içerisinde kullanılacak verileri ver
    <UserContext.Provider value={{ name, surname, adress, selamla }}>
      {/*  */}
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
