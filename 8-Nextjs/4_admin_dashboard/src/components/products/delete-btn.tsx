"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface Props {
  productId: string;
}

const DeleteBtn: FC<Props> = ({ productId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // butona tıklanınca
  const handleDelete = async () => {
    // silme işlemi için onay al
    if (!confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;

    try {
      setIsLoading(true);
      await deleteProduct(productId);
      router.refresh();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="card-btn cursor-pointer bg-red-50 hover:bg-red-100 !text-red-600 border-red-200 hover:border-red-300"
    >
      Sil
    </button>
  );
};

export default DeleteBtn;
