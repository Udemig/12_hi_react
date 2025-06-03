import {
  AddToBasketResponse,
  CheckoutSingleItemResponse,
  GetCartItemsResponse,
  GetMyOrdersResponse,
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

// sepetteki bütün ürünleri satın al
const checkoutAllItems = async (): CheckoutSingleItemResponse => {
  const body = {
    userId,
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

// ürünü sepetten sil
const removeCartItem = async (groceryId: string) => {
  const res = await fetch(
    `${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
};

// ürünün miktarını artır / azalt
const updateCartItem = async (groceryId: string, quantity: number) => {
  const res = await fetch(`${BASE_URL}/api/cart/item`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

// kendi siparişlerimi getir
const getMyOrders = async (): GetMyOrdersResponse => {
  const res = await fetch(`${BASE_URL}/api/orders?customer_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export {
  addToBasket,
  checkoutSingleItem,
  getCartItems,
  clearCart,
  removeCartItem,
  updateCartItem,
  checkoutAllItems,
  getMyOrders,
};
