import { CardItem } from "@/types";
import Image from "next/image";
import { FC } from "react";

const Card: FC<CardItem> = ({ icon, label, value }) => {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center shadow-md gap-3">
      <div>
        <h4 className="text-gray-700 whitespace-nowrap text-base sm:text-sm">
          {label}
        </h4>
        <p className="font-bold text-xl max-md:text-2xl">{value}</p>
      </div>

      <Image src={icon} alt={label} width={56} height={56} />
    </div>
  );
};

export default Card;
