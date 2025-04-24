/*
 ! Void Type
 * Sadece fonksiyonların return tipinde kullanbilir.
 * Fonksiyon herhangi bir veri return etmiyorsa kullanılır.
 * Void varsa return sadece foknsiyonu durdurma amacıyla kullanılabilir.
*/
function selamla(): void {
  console.log("selamlar");

  return; // fonksiyonu durduran yani değer döndürmeyen return kullanılabilir
}

/*
 ! Never Type
 * Sadece fonksiyonların return tipinde kullanabiliyoruz
 * Fonksiyon hata fırlatıyorsa return tipi never olarak ifade edilir.
 * "Hiçbir zaman görevinin tam olarak tamamlayamaz" durumunu ifade eder.
 */
function log(message?: string): string | never {
  if (!message) {
    throw new Error("Mesaj sağlanmadı");
  } else {
    return "mesaj alındı";
  }
}

log("selam");

log();
