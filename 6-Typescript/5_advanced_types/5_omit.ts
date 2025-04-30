/*
 * Omit
 * Bir type'da istemediğimiz bir değer olduğunda bütün tipi baştan yazmak yerine istemediğimiz değeri çıkartıp tipi kullanmamızı sağlar
 */

type Product = {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
  name2: string;
  price2: number;
  isAvailable2: boolean;
};

// api'dan ürünler alınanca bir ürün dizisi döner
const getProducts = (): Product[] => {
  // axios.get()
  return [];
};

// api'a yeni ürün ekleniceği zaman product tipindeki id dışındaki bütün değerleri göndermeliyiz
const createProduct1 = (newProduct: {
  name: string;
  price: number;
  isAvailable: boolean;
  name2: string;
  price2: number;
  isAvailable2: boolean;
}) => {};

// omit ile yukarıdaki fonksiyonu tekrar yazalım
const createProduct2 = (newProduct: Omit<Product, "id">) => {};
