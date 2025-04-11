import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

test("Accordion component'ı düzgün çalışır", () => {
  //1) test edilecek component'ı renderla
  render(<Accordion />);

  //2) gerekli elementleri çağır
  const button = screen.getByRole("button");
  const p = screen.getByRole("paragraph");

  //3) butonun içerisinde "göster" yazıyor mu?
  expect(button).toHaveTextContent("Göster");

  //4) paragraf elementinde "hide" class'ı var mı?
  expect(p).toHaveClass("hide");

  //5) butona tıkla
  fireEvent.click(button);

  //6) butonun içerisinde "gizle" yazıyor mu?
  expect(button).toHaveTextContent("Gizle");

  //7) paragraf elementinde "show" class'ı var mı?
  expect(p).toHaveClass("show");

  //8) butona tıkla
  fireEvent.click(button);

  //9) butonun içerisinde "göster" yazıyor mu?
  expect(button).toHaveTextContent("Göster");

  //10) paragraf elementinde "hide" class'ı var mı?
  expect(p).toHaveClass("hide");
});
