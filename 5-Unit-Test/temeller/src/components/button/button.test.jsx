import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

// Unit test yazmak yazdığımız kodun algoritmik olarak doğru çalışıp çalışmadığını kontrol etmek için kullanılır

test("Butona tıklama olayında renk ve yazı değişir", () => {
  // test edilecek bileşen render edilir
  render(<Button />);

  // test edilecek buton elementini al
  const button = screen.getByRole("button");

  // buton kırmızı mı diye bakarım
  expect(button).toHaveStyle({ background: "red" });

  // yazı "maviye çevir" mi diye bakarım
  expect(button).toHaveTextContent("Maviye Çevir");

  // butona tıklarım
  fireEvent.click(button);

  // buton mavi oldu mu
  expect(button).toHaveStyle({ background: "aqua" });

  // yazı "kırmızıya çevir" oldu mu
  expect(button).toHaveTextContent("Kırmızıya Çevir");
});
