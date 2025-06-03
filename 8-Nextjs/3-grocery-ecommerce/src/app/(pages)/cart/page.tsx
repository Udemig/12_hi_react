import CartItem from "@/components/cart/cart-item";
import ClearBtn from "@/components/cart/clear-btn";
import CartSummary from "@/components/cart/cart-summary";
import { getCartItems } from "@/service/basket-service";
import { FC } from "react";
import EmptyCart from "@/components/cart/empty-cart";

const CartPage: FC = async () => {
  const { cart } = await getCartItems();

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Alışveriş Sepeti
      </h1>

      <div className="lg:flex gap-6 ">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">
                Sepetiniz ({cart.items.length})
              </h2>

              <ClearBtn />
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default CartPage;
