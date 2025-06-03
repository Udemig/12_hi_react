import { GetAllProductsResponse, GetProductByIdResponse } from "@/types";

// temel api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// bütün ürünleri getir
const getAllProducts = async (): GetAllProductsResponse => {
  const res = await fetch(`${BASE_URL}/api/groceries`);

  return res.json();
};

// organik ürünleri getir
const getOrganicProducts = async (): GetAllProductsResponse => {
  const res = await fetch(`${BASE_URL}/api/groceries?organic=true`);

  return res.json();
};

// ürünün detayını getir
const getProductById = async (id: string): GetProductByIdResponse => {
  const res = await fetch(`${BASE_URL}/api/groceries/${id}`);

  return res.json();
};

export { getAllProducts, getProductById, getOrganicProducts };
