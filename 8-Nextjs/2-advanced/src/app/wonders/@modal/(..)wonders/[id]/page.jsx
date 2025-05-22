"use client";
import { data } from "@/utils/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const wonder = data.find((item) => item.id === id);

  if (!wonder) {
    return <div>Harika Bulunamadı</div>;
  }

  const handleClose = () => {
    router.back();
  };

  const handleDetail = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center">
      <div className="w-4/5 lg:w-1/2 bg-white p-10 rounded-md text-black">
        <div className="flex justify-between">
          <button onClick={handleClose}>x</button>

          <button onClick={handleDetail}>?</button>
        </div>

        <h1 className="mt-5">{wonder.name}</h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="w-full aspect-square object-cover rounded-md"
        />
      </div>
    </div>
  );
}
