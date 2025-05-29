import OrderButtons from "@/components/detail/order-buttons";
import OrganicBadge from "@/components/detail/organic-badge";
import ProductDetails from "@/components/detail/product-details";
import ProductInfo from "@/components/detail/product-info";
import { getProductById } from "@/service/product-service";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft, FaShoppingBasket } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbWeight } from "react-icons/tb";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const Grocery: FC<Props> = async ({ params }) => {
  const { id } = await params;

  const { grocery } = await getProductById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to home */}
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-600 hover:underline"
        >
          <FaArrowLeft />
          <span>Anasayfaya Dön</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Product details */}
        <ProductDetails grocery={grocery} />

        {/* Product Information */}
        <ProductInfo grocery={grocery} />
      </div>
    </div>
  );
};

export default Grocery;
