"use client";

import { clearCart } from "@/service/basket-service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const ClearBtn: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClearCart = async () => {
    setIsLoading(true);

    clearCart()
      .then(() => {
        toast.success("Sepetiniz temizlendi");
        router.refresh(); // sayfayı yenile
      })
      .catch(() => {
        toast.error("Sepet temizlenirken bir hata oluştu");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClearCart}
      className="text-red-600 hover:text-red-700 transition flex items-center gap-1 text-sm cursor-pointer"
    >
      <FaTrash />
      <p>Sepeti Boşalt</p>
    </button>
  );
};

export default ClearBtn;
