import { Product } from "@/types";
import Image from "next/image";
import { FC } from "react";
import OrganicBadge from "./organic-badge";
import { TbWeight } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import OrderButtons from "./order-buttons";

interface Props {
  grocery: Product;
}

const ProductDetails: FC<Props> = ({ grocery }) => {
  return (
    <div className="md:flex">
      {/* Product image */}
      <div className="relative h-96 md:w-1/2">
        <Image
          src={grocery.photo}
          alt={grocery.name}
          fill
          className="object-cover w-full h-full"
        />

        <OrganicBadge isOrganic={grocery.isOrganic} />
      </div>

      {/* Product details */}
      <div className="md:w-1/2 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{grocery.name}</h1>
            <p className="text-gray-600">{grocery.origin}</p>
          </div>
          <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-gray-700">
            <TbWeight />
            <span>{grocery.unit}</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-3xl font-bold text-green-600">{grocery.price}₺</p>
          <p className="text-gray-500">KDV dahil</p>
        </div>

        <div className="my-6 h-px bg-gray-200"></div>

        <p className="text-gray-700 mb-4">{grocery.description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <MdOutlineLocalShipping className="text-xl text-green-600" />
            <span>Aynı gün teslimat imkanı</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaShoppingBasket className="text-xl text-green-600" />
            <p>
              Stok Durumu{" "}
              {grocery.stock > 0 ? (
                <span>
                  <b>{grocery.stock}</b> kilo/adet mevcut
                </span>
              ) : (
                "Stokta yok"
              )}
            </p>
          </div>

          {grocery.nutritionalValue && (
            <div className="text-gray-700 mt-4">
              <h3 className="font-semibold mb-1">Beslenme Değerleri</h3>

              <p>{grocery.nutritionalValue}</p>
            </div>
          )}
        </div>

        <OrderButtons grocery={grocery} />
      </div>
    </div>
  );
};

export default ProductDetails;
