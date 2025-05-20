import type { FC } from "react";
import type { IShoe } from "../../types";

interface Props {
  shoe: IShoe;
  design?: string;
}

const Price: FC<Props> = ({ shoe, design }) => {
  let price: number = shoe.price;

  // indirim varsa indirimli fiyatı hesapla
  if (shoe.discount) {
    price = (shoe.price * (100 - shoe.discount)) / 100;
  }

  return (
    <div
      className={`${
        shoe.discount > 0 ? "text-my-yellow" : "text-white"
      } ${design}`}
    >
      ${price.toFixed(2)}
    </div>
  );
};

export default Price;
