import { createContext, useState } from "react";
import { toast } from "react-toastify";

const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  console.log(basket);

  // Sepete ürün eklemek / miktarını için fonksiyon
  const addToBasket = (product) => {
    // Sepette ürün var mı kontrol et
    const found = basket.find((i) => i.id === product.id);

    if (!found) {
      // Sepette ürün yoksa

      setBasket(basket.concat({ ...product, amount: 1 }));

      toast.success("Sepete ürün eklendi");
    } else {
      // Sepette ürün mevcutsa miktarı bir arttır
      const updated = { ...found, amount: found.amount + 1 };

      // Sepetteki ürünlerin içerisinden güncellenen elemanın  güncel değerini ekle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));

      // Sepeti güncelle
      setBasket(newBasket);

      toast.info(`Ürün miktarı güncellendi: ${updated.amount}`);
    }
  };

  // Sepetten eleman kaldırmak için fonksiyon
  const removeFromBasket = (delete_id) => {
    // İd'si bilinen ürünü sepetten kaldır
    const filtred = basket.filter((i) => i.id !== delete_id);

    // Sepeti güncelle
    setBasket(filtred);

    toast.error("Ürün sepetten kaldırıldı");
  };

  // Ürün Miktarını azalt
  const decreaseAmount = (delete_id) => {
    // Miktarı azaltılacak ürünü sepette bul
    const found = basket.find((i) => i.id === delete_id);

    // Eğer ürünün miktarı birden fazlaysa

    if (found.amount > 1) {
      // Miktarı güncelle
      const updated = { ...found, amount: found.amount - 1 };
      // Güncel değeri diziye aktar

      const newBasket = basket.map((i) => (i.id == updated.id ? updated : i));

      // Sepeti güncelle
      setBasket(newBasket);

      toast.info(`Ürün miktarı azaltıldı: ${updated.amount}`);
    } else {
      // Ürün miktarı'1 e eşitse bunu direkt sil
      removeFromBasket(delete_id);
    }
  };
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {/*  */}
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
