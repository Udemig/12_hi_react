import Link from "next/link";
import { FC } from "react";
import { FaShoppingBag } from "react-icons/fa";

const EmptyOrders: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>

      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-600 mb-2">
          Henzüz sipariş vermediniz
        </h2>
        <p>Alışverişe başlamak için ürünlerimizi keşfedin.</p>

        <Link
          href="/"
          className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition mt-4 inline-block"
        >
          Hemen Alışverişe Başla
        </Link>
      </div>
    </div>
  );
};

export default EmptyOrders;
