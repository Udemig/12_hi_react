import { FC } from "react";
import { getAllProducts } from "@/service/product-service";
import { Product } from "@/types";
import Card from "./card";

const Products: FC = async () => {
  const { groceries } = await getAllProducts();

  // elimdeki diziyi istediğimiz formata dönüştürmek için
  const groupedProducts = groceries.reduce<Record<string, Product[]>>(
    (obj, product) => {
      // ürünün kategorisini al
      const category = product.category;

      // nesnenin içerisinde ilgili kategoriyle alakalı bir alan yoksa oluştur
      if (!obj[category]) {
        obj[category] = [];
      }

      // nesnenin içerisinde ilgili kategoriyle alakalı bir alan varsa o alana ürünü ekle
      obj[category].push(product);

      // nesneyi döndür
      return obj;
    },
    {}
  );

  return (
    <div className="flex  flex-col gap-10">
      {Object.keys(groupedProducts).map((category, key) => (
        <div key={key}>
          <h2 className="text-2xl font-bold mb-5">{category}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {groupedProducts[category].map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
