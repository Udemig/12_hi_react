import { Cart } from "@/types";
import { FC } from "react";
import CheckoutButton from "./checkout-button";
import Link from "next/link";

interface Props {
  cart: Cart;
}

const CartSummary: FC<Props> = ({ cart }) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-lg shadow overflow-hidden p-6 sticky top-4">
        <h2 className="font-semibold">Sipariş Özeti</h2>

        <div className="space-y-3 mt-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Ürünler Toplamı</span>
            <span className="font-semibold">{cart.totalAmount}₺</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Kargo</span>
            <span className="font-semibold">Bedava</span>
          </div>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between text-gray-600">
              <span>Toplam</span>
              <span className="font-semibold">{cart.totalAmount}₺</span>
            </div>
          </div>
        </div>

        <CheckoutButton isEmpty={cart.items.length === 0} />

        <Link
          href="/"
          className="block text-center mt-4 text-green-600 hover:underline"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
