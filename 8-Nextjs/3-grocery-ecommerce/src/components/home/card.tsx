import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TbWeight } from "react-icons/tb";
import CardAction from "./card-action";
import OrganicBadge from "../detail/organic-badge";

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

          <OrganicBadge isOrganic={product.isOrganic} />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>

            <span className="tedxt-sm text-gray-600">{product.origin}</span>
          </div>

          <p className="flex items-center gap-1 text-xs bg-gray-200 px-2 py-1 rounded">
            <TbWeight />
            {product.unit}
          </p>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-green-700 font-bold text-xl">{product.price}₺</p>

          <CardAction productId={product._id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
