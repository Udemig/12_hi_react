import { Product } from "@/types";
import { FC } from "react";

interface Props {
  grocery: Product;
}

const ProductInfo: FC<Props> = ({ grocery }) => {
  const info = [
    { title: "Kategori", value: grocery?.category },
    { title: "Menşei", value: grocery?.origin },
    { title: "Tazelik", value: `${grocery?.expiryDays} gün` },
    { title: "Organik", value: grocery?.isOrganic ? "Evet" : "Hayır" },
    { title: "Birim", value: grocery?.unit },
  ];

  return (
    <div className="p-6 border-t border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Ürün Bilgileri
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {info.map((item, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm text-gray-500">{item.title}</h3>
            <p className="font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
