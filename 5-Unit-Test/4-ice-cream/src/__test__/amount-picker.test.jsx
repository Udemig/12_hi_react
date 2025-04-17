import { render, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import AmountPicker from "../components/modal/amount-picker";
import userEvent from "@testing-library/user-event";
import { addToCart, deleteFromCart } from "../redux/cartSlice";

// useDispatch mock
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

const cartItem = {
  name: "Çikolata Fırtınası",
  image: "/ice-2.png",
  price: 20,
  id: "9a15",
  type: "cup",
  amount: 2,
};

describe("AmountPicker", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Bileşen item.amount değerini doğru şekilde render eder", () => {
    render(<AmountPicker item={cartItem} />);
    screen.getByText(cartItem.amount);
  });

  it("- butonuna tıklanınca deleteFromCart aksiyonu çalışır", async () => {
    const user = userEvent.setup();

    render(<AmountPicker item={cartItem} />);

    const btn = screen.getByRole("button", { name: "-" });

    await user.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(deleteFromCart(cartItem));
  });

  it("+ butonuna tıklanınca addToCart aksiyonu çalışır", async () => {
    const user = userEvent.setup();

    render(<AmountPicker item={cartItem} />);

    const btn = screen.getByRole("button", { name: "+" });

    await user.click(btn);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart({ item: cartItem, selectedType: cartItem.type }));
  });
});
