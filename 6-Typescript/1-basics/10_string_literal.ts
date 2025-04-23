/*
 ! String Literal
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabilceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlaması yapabiliyoruz.

 * Örn: Bir kullanıcı nesnesinin tipini tanımlamak istiyoruz
 * Hesap türünün tipini tanımlarken string yazmak yerine sadece alabilceği 3-4 farklı değer ifade edersek daha kısıtlayıcı davranmış oluruz
 */

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium"; // string literal || union type
  gender: "man" | "woman";
};

const newUser: User = {
  id: 46456546,
  name: "Faruk",
  account_type: "admin",
  gender: "man",
};

// Örnek
// Bir araba kiralama sitesi için api'dan gelen araba verilerinin tipini tanımla
type Cart = {
  make: string;
  model: string;
  gearbox: "manuel" | "otomatik";
  fuel: "benzin" | "dizel" | "elektrik" | "hibrit" | "gaz";
  year: number;
  owner: any;
};
