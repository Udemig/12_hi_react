import { render, screen } from "@testing-library/react";
import Card from "../components/card";
import { mockData } from "../utils/constants";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";
import { addToCart } from "../redux/cartSlice";

// useDispatch mock
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Card Testleri", () => {
  // useDispatch'in döndürdüğü dispatch methodnu mockla
  const dispatchMock = jest.fn();

  // useDispatch her çağrılığında sahte dispatch methodunu return etsin
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  // her testin sonunda mock'u resetle
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("item propuna göre veriler ekrana basılıyor mu", () => {
    render(<Card item={mockData[0]} />);

    // başlık ve fiyat ekrana geliyor mu
    screen.getByText(mockData[0].name);
    screen.getByText(`₺${mockData[0].price} / top`);

    // resmin kaynağı doğru mu
    const img = screen.getByAltText(mockData[0].name);
    expect(img).toHaveAttribute("src", mockData[0].image);
  });

  it("tipin seçili olma durumuna göre buton görünürlüğü değişir", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // card bileşenini renderla
    render(<Card item={mockData[0]} />);

    // septe ekle butonunu ekrandan al
    const basketBtn = screen.getByRole("button", { name: /sepete ekle/i });

    // sepete ekle butonu görünmezdir
    expect(basketBtn).toHaveClass("invisible");

    // külahta butonunu al
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });

    // külahta butonuna tıkla
    await user.click(cornetBtn);

    // sepete ekle butonu görünürdür
    expect(basketBtn).not.toHaveClass("invisible");

    // külahta butonuna tıkla
    await user.click(cornetBtn);

    // sepete ekle butonu görünmezdir
    expect(basketBtn).toHaveClass("invisible");
  });

  it("sepete ekle butonuna tıklanınca aksiyon dispatch edilir", async () => {
    // userEventi kur
    const user = userEvent.setup();

    // bileşeni renderla
    render(<Card item={mockData[0]} />);

    // külahta butonunu al ve tıkla
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });
    await user.click(cornetBtn);

    // sepete ekle butonunu al ve tıkla
    const basketBtn = screen.getByRole("button", { name: /sepete/i });
    await user.click(basketBtn);

    // dispatch'in çağrılığını doğrula
    expect(dispatchMock).toHaveBeenCalledTimes(1);

    // doğru aksiyon ve payload ile çağrıldığını doğrula
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({
        item: mockData[0],
        selectedType: "cornet",
      })
    );
  });
});
