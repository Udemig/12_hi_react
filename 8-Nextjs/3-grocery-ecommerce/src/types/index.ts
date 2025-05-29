type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo: string;
  __v: number;
};

type GetAllProductsResponse = Promise<{
  groceries: Product[];
}>;

export type { Product, GetAllProductsResponse };
