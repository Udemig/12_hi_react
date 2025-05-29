import { Cart } from "@/types";
import { FC } from "react";

interface Props {
  cart: Cart;
}

const CartSummary: FC<Props> = ({ cart }) => {
  return <div>CartSummary</div>;
};

export default CartSummary;
