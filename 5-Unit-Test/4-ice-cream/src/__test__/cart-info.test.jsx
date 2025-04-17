import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartInfo from "../components/modal/cart-info";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

// Mock react-redux useDispatch
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

// Mock clearCart action
jest.mock("../redux/cartSlice", () => ({
  clearCart: jest.fn(() => ({ type: "cart/clearCart" })),
}));

// Mock toast
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("CartInfo Component", () => {
  let dispatchMock;
  const closeMock = jest.fn();

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    toast.success.mockClear();
    clearCart.mockClear();
    closeMock.mockClear();
  });

  const renderWithCart = (cart) => {
    render(<CartInfo cart={cart} close={closeMock} />);
  };

  test("displays 0₺ for subtotal, shipping, and total when cart is empty", () => {
    renderWithCart([]);

    // Subtotal
    expect(screen.getByText("Ara Toplam")).toBeInTheDocument();
    expect(screen.getAllByText("0₺")[0]).toBeInTheDocument();

    // Shipping
    expect(screen.getByText("Kargo")).toBeInTheDocument();
    // Since subtotal is 0, shipping should display '0₺'
    expect(screen.getAllByText("0₺")).toHaveLength(3);
    // Total also 0₺
    expect(screen.getAllByText("0₺")[2]).toBeInTheDocument();
  });

  test("calculates shipping and total correctly when subtotal is below 100", () => {
    const cart = [
      { price: 30, amount: 2 }, // 60
      { price: 10, amount: 1 }, // 10
    ];
    // subtotal: 70, shipping: 20, total: 90
    renderWithCart(cart);

    expect(screen.getByText("70₺")).toBeInTheDocument();
    expect(screen.getByText("20₺")).toBeInTheDocument();
    expect(screen.getByText("90₺")).toBeInTheDocument();
  });

  test("displays free shipping and total correctly when subtotal is above 100", () => {
    const cart = [
      { price: 60, amount: 2 }, // 120
    ];
    // subtotal: 120, shipping: 0, total: 120
    renderWithCart(cart);

    const priceElements = screen.getAllByText("120₺");
    expect(priceElements.length).toBeGreaterThanOrEqual(2);

    expect(screen.getByText("Ücretsiz")).toBeInTheDocument();
  });

  test("calls close, dispatches clearCart and shows toast on button click", () => {
    const cart = [{ price: 20, amount: 1 }];
    renderWithCart(cart);

    const orderButton = screen.getByRole("button", { name: /Sipariş Ver/i });
    fireEvent.click(orderButton);

    expect(closeMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(clearCart());
    expect(toast.success).toHaveBeenCalledWith("Ürünler hazılanıyor...");
  });
});
