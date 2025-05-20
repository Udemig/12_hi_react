import type { FC } from "react";
import type { IShoe } from "../../types";

interface Props {
  shoe: IShoe;
}

const Badge: FC<Props> = ({ shoe }) => {
  return (
    (shoe.discount > 0 || shoe.isNew) && (
      <span
        className={`absolute text-white rounded rounded-tl-[12px] rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px] px-2 py-1 lg:px-4 ${
          shoe.discount ? "bg-my-yellow" : "bg-my-blue"
        }`}
      >
        {shoe.discount > 0 ? `${shoe.discount}%` : "Yeni"}
      </span>
    )
  );
};

export default Badge;
