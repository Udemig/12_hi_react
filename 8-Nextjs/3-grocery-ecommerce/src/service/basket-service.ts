import {
  AddToBasketResponse,
  CheckoutSingleItemResponse,
  GetCartItemsResponse,
  Product,
} from "@/types";

// temel api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;

// sepete ürün ekle
const addToBasket = async (
  groceryId: string,
  quantity: number
): AddToBasketResponse => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

// sepetteki ürünleri getir
const getCartItems = async (): GetCartItemsResponse => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

// bir ürünün satın alım oturmunu oluştur
const checkoutSingleItem = async (
  grocery: Product,
  quantity: number
): CheckoutSingleItemResponse => {
  const body = {
    grocery: {
      _id: grocery._id,
      name: grocery.name,
      price: grocery.price,
      description: grocery.description,
    },
    quantity,
    customerInfo: {
      userId,
      name: "Furkan Evin",
      phone: "532 123 45 67",
      deliveryAddress: "123 Main St, Anytown, USA",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

// sepeti temizle
const clearCart = async () => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    method: "DELETE",
  });

  return res.json();
};

export { addToBasket, checkoutSingleItem, getCartItems, clearCart };
