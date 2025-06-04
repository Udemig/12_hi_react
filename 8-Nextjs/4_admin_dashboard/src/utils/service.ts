import { GetOrdersResponse, GetProductsResponse, Product } from "@/types";

const API_URL = "http://localhost:4000";

// bütün siparişleri getir
const getOrders = async (): GetOrdersResponse => {
  const response = await fetch(`${API_URL}/orders`);

  return response.json();
};

const getProducts = async (): GetProductsResponse => {
  const response = await fetch(`${API_URL}/products`);

  return response.json();
};

const getProduct = async (productId: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${productId}`);

  return response.json();
};

const deleteProduct = async (productId: string) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
  });

  return response.json();
};

export { getOrders, getProducts, deleteProduct, getProduct };
