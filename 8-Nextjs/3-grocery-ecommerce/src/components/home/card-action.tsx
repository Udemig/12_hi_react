"use client";

import { FC, useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { addToBasket } from "@/service/basket-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  productId: string;
}

const CardAction: FC<Props> = ({ productId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // sepete ekle
  const handleAddToCart = () => {
    setIsLoading(true);

    addToBasket(productId, 1)
      .then(() => {
        toast.success("Ürün sepete eklendi");
        router.refresh();
      })
      .catch(() => {
        toast.error("Ürün sepete eklenemedi");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleAddToCart}
      className="bg-green-500 text-white shadow-sm rounded-full p-2 cursor-pointer transition-all hover:bg-green-600 hover:shadow-md disabled:brightness-75"
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </button>
  );
};

export default CardAction;
