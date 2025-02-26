import { createContext, useEffect, useState } from "react";
import api from "../api";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // İstek atılacak url'i belirle
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    // Api'a istek at
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, setSelectedCategory, selectedCategory }}
    >
      {/*  */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
