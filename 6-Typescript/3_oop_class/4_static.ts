/*
 ! Static
 * Static anahtar kelimesi özellik veya methodun sınıfın örneği olmadan kullanılmasını sağlar.
*/

//! Static Method:
// Doğrudan class üzerinden erişilebilen methodlar

class Matematik {
  x: number = 10;

  topla(y: number): void {
    console.log(this.x + y);
  }

  // static olan method class içerisindeki değişkenlere erişilemez (this kullanılamaz)
  static carp(a: number, b: number): void {
    console.log(a * b);
  }
}

// static olmayan methoda erişelim
// class'tan alınan örnek üzerinden erişilebilir
const math = new Matematik();
math.topla(20);

// static olan methoda erişme
// doğrudan class üzerinden erişebiliriz
Matematik.carp(6, 7);

//! Static Property:
// Doğrudan class üzerinden erişilebilen değişkenler

class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    this.isim = isim;
    Ogrenci.ogrenciSayisi++;
  }
}

const o1 = new Ogrenci("Ali");
const o2 = new Ogrenci("Fatma");
const o3 = new Ogrenci("Ahmet");
const o4 = new Ogrenci("Ayşe");

console.log(o1, o2, o3, o4);
console.log("Toplam Öğrenci", Ogrenci.ogrenciSayisi);
