import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  product: Product;
}

const Card: FC<Props> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white">
      <Link href={`/grocery/${product._id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.photo}
            alt={product.name}
            className="object-cover"
            fill
          />
        </div>
      </Link>

      <div className="p-4">
        <h1 className="text-lg font-bold">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
