import { createContext, useState } from "react";

const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Sepete ürün eklemek / miktarını için fonksiyon
  const addToBasket = (product) => {};

  // Sepette eleman var mı kontrol  et

  const foundItem = basket.find((i) => i.id === product.id);

  if (!foundItem) {
    console.log(`Ürün eklendi`);
  } else {
    console.log(`Ürün zaten ekli`);
  }

  // Sepetten eleman kaldırmak için fonksiyon
  const removeFromBasket = () => {};
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {/*  */}
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
