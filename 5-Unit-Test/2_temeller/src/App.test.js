import { render, screen } from "@testing-library/react";
import App from "./App";

/*
 ! Unit Test
 * Yazdığımız dinamik olan bütün bileşenlerin testini yazarız
 * Unit test yazmamız sayesinde kod değişikliği yapıldığında, yaptığımzı değişiklikleri githuba göndermeden önce testleri çalıştırarak hata olup olmadığını kontrol ederiz.
 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıcağı ve gözden bir şey kaçma ihtimali yüksek olduğundan test yazmak önemlidir.
 * Bu yüzde unit test le bileşenlerin doğru çalışıp çalışmadığını kontrol eden testler yazarı
*/

// app.test.js: app component'ının testlerinin yazıldığı dosya
// Bir dosyasnın test dosyası olduğunu .test.js/jsx uzantısından anlayabiliriz.

// test yazarken test veya it methodlarını kullnarız
// test fonksiyonları 2 parametre alır
// 1) string: testin adı
// 2) function: testin yapıldığı yer
test("react öğren linki ekrana basılır", () => {
  // test edilecek component render edilir (virtual - sanal ortamda - ramde)
  render(<App />);

  // test edilecek elementi çağır
  // eğer component tarayıca ekrana basılsaydı document.querySelector() / getElementById() kullanırdık
  // ram'de render edlildiğinden `document` yerine `screen` ve querySelector yerine de farklı methodlar kullanırız.
  const link = screen.getByText("React Öğren");

  // çağrılan elementten beklentimi söyle
  expect(link).toBeInTheDocument();
});
