import type { FC } from "react";
import type { IShoe } from "../../types";
import Badge from "../../components/card/badge";
import Price from "../../components/card/price";

interface Props {
  shoe: IShoe;
}

const Head: FC<Props> = ({ shoe }) => {
  return (
    <div className="flex flex-col gap-4">
      <Badge shoe={shoe} />

      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {shoe.name}
      </h1>

      <div className="text-2xl flex gap-1">
        <Price shoe={shoe} design="!text-my-blue" />

        {shoe.discount > 0 && (
          <span className="ps-3 line-through">${shoe.price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default Head;
