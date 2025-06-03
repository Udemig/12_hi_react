"use client";

import { removeCartItem, updateCartItem } from "@/service/basket-service";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

interface Props {
  item: {
    grocery: Product;
    name: string;
    price: number;
    quantity: number;
    _id: string;
  };
}

const ItemActions: FC<Props> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // ürünün miktarını artır / azalt
  const handleQuantityChange = async (quantity: number) => {
    setIsLoading(true);

    try {
      await updateCartItem(item.grocery._id, quantity);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ürünü sepetten sil
  const handleRemoveItem = async () => {
    setIsLoading(true);

    try {
      await removeCartItem(item.grocery._id);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded mr-4">
        <button
          disabled={item.quantity === 1 || isLoading}
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="px-2 py-2 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-[36px] text-center">
          {item.quantity}
        </span>

        <button
          disabled={item.quantity === item.grocery.stock || isLoading}
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="px-2 py-2 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>

      <button
        disabled={isLoading}
        onClick={handleRemoveItem}
        className="text-red-600 hover:text-red-700 cursor-pointer disabled:opacity-50"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
