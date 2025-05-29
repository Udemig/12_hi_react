import { GetAllProductsResponse } from "@/types";

// temel api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// bütün ürünleri getir
const getAllProducts = async (): GetAllProductsResponse => {
  const res = await fetch(`${BASE_URL}/api/groceries`);

  return res.json();
};

export { getAllProducts };
