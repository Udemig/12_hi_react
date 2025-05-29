"use client";

import { Product } from "@/types";
import { FC } from "react";

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
  return <div>ItemActions</div>;
};

export default ItemActions;
