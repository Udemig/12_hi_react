/*
 ! Default Param (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerlerin undefined olmasını istemeyiz bunun yerine varsayılan bir değere sahip olması istenebilir.
 
*/

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

/* 

 ! Challange
  * Ürünün kdv'li fiyatını hesaplayan bir fonksiyon yazınız.
  * fonksiyon 2 parametre alsın 1.fiyat 2.kdv
  * 2.paraemtreye değer gönderilmediğinde kdv %18'den hesaplansın
  * hesapla(200,35) ===> 270
  * hesapla(200) ===> 236
  * // kopya  fiyat + (kdv / 100) * fiyat
 */

// Cevap
const hesapla = (fiyat: number, kdv = 18): number => {
  return fiyat + (kdv / 100) * fiyat;
};
console.log("%35 kdv'li fiyat", hesapla(200, 35));
console.log("Varsayılan kdv'li fiyat", hesapla(200));
