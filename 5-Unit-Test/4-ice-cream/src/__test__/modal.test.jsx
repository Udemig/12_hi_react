import { useSelector } from "react-redux";
import CartInfo from "../components/modal/cart-info";
import CartItem from "../components/modal/cart-item";
import { render, screen } from "@testing-library/react";
import Modal from "../components/modal";
import userEvent from "@testing-library/user-event";
import { mockCartData } from "../utils/constants";

// useSelector mock
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

// cartInfo ve cartItem component'ları modal içerisinde kullanıldığı ve useDispatch/useNavigate içerbilceği için mockla
jest.mock("../components/modal/cart-item", () => ({ item }) => <h1>{item.name}</h1>);

jest.mock("../components/modal/cart-info", () => () => <h1>Cart Item</h1>);

describe("Modal Component", () => {
  const closeMock = jest.fn();

  it("isOpen propuna göre modal ekrana basılır", () => {
    // useSelector çağrılınca bunu return etsin
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla (isOpen:false)
    const { rerender, queryByTestId, getByTestId } = render(<Modal isOpen={false} close={closeMock} />);

    // modal ekranda yoktur
    expect(queryByTestId("modal")).toBeNull();

    // bileşeni tekrar renderla (isOpen:true)
    rerender(<Modal isOpen={true} close={closeMock} />);

    // modal ekranda vardır
    getByTestId("modal");
  });

  it("x butonuna tıklanınca close fonksiyonu çalışır", async () => {
    // userevent kur
    const user = userEvent.setup();

    // useSelector çağrılınca bunu return etsin
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla
    render(<Modal isOpen={true} close={closeMock} />);

    // x butonunu seç
    const closeBtn = screen.getByTestId("close");

    // x butonuna tıkla
    await user.click(closeBtn);

    // close fonksiyonu çalıştı mı
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it("sepet doluluk durumuna göre ekrana uyarı basılır", () => {
    // useSelector çağrılınca boş dizi return etsin
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla
    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı vardır
    screen.getByText(/henüz/i);

    // sıradaki renderda useSelector çağrılınca dolu dizi return etsin
    useSelector.mockReturnValue({ cart: mockCartData });

    // bileşeni renderla
    rerender(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı yoktur
    expect(screen.queryByText(/henüz/)).toBeNull();
  });

  it("sepet dolu ise her bir eleman için ekrana kart basılır", () => {
    // useSelector çağrılınca bunu return etsin
    useSelector.mockReturnValue({ cart: mockCartData });

    // bileşeni renderla
    render(<Modal isOpen={true} close={closeMock} />);

    // sepetteki her bir veri için ekranda kart var mı=
    mockCartData.forEach((item) => screen.getByText(item.name));
  });
});
