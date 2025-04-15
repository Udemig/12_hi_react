import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

it("error component'ı hata mesajını gösterir", () => {
  // test edilebilir sahte bir fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni renderla
  render(<Error info="İnternetiz çok yavaş" refetch={mockFn} />);

  // hata mesajı ekranda mı?
  screen.getByText("İnternetiz çok yavaş");

  // tekrar dene butonunu al
  const button = screen.getByRole("button", { name: "Tekrar Dene" });

  // butona tıkla
  fireEvent.click(button);

  // fonksiyon çağrıldı mı?
  expect(mockFn).toHaveBeenCalled();
});
