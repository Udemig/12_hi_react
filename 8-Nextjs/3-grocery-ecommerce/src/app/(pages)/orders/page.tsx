import { getMyOrders } from "@/service/basket-service";
import EmptyOrders from "./empty-orders";
import Image from "next/image";
import { FaCalendarAlt, FaPhone } from "react-icons/fa";

const OrdersPage = async () => {
  const { orders } = await getMyOrders();

  if (!orders || orders.length === 0) {
    return <EmptyOrders />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              {/* Ürün Bilgileri */}
              <div className="flex  items-center justify-between mb-4">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={order.product.photo}
                      alt={order.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {order.product.name}
                    </h3>
                    <p className="text-gray-600">
                      {order.quantity} {order.product.unit} x{" "}
                      {order.product.price}₺
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {order.money_spend}
                  </div>
                  <div className="text-sm text-gray-500">{order.currency}</div>
                </div>
              </div>

              {/* Sipariş Tarihi */}
              <div className="grid md:grid-cols-3 gap-4 py-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaCalendarAlt className="text-green-600" />

                  <div>
                    <div className="text-sm text-gray-500">Sipariş Tarihi</div>
                    <div className="font-medium">
                      {new Date(order.createdAt).toLocaleDateString("tr")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Müşteri Bilgileri */}
              <div className="grid md:grid-cols-3 gap-4 py-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaPhone className="text-green-600" />

                  <div>
                    <div className="text-sm text-gray-500">Müşteri</div>
                    <div className="font-medium">{order.customer_name}</div>
                    <div className="text-sm text-gray-600">
                      {order.customer_phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
