/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerlerin tipini tanımlamaktan ibarettir.
 */

// normal fonk
function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu " + (a + b);
}

hesaplama(10, 40);

// "metin " + 10  = "metin 10"

let x: string = "ali";

// arrow fonk
const hesapla = (a: number, b: number): number => {
  return a + b;
};

hesapla(10, 20);
