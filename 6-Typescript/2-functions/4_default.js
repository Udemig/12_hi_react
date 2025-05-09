/*
 ! Default Param (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerlerin undefined olmasını istemeyiz bunun yerine varsayılan bir değere sahip olması istenebilir.
 
*/
// Örnek
function selamVer(isim) {
    if (isim === void 0) { isim = "Dünya"; }
    console.log("Merhaba ".concat(isim));
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
var hesapla = function (fiyat, kdv) {
    if (kdv === void 0) { kdv = 18; }
    return fiyat + (kdv / 100) * fiyat;
};
console.log("%35 kdv'li fiyat", hesapla(200, 35));
console.log("Varsayılan kdv'li fiyat", hesapla(200));
