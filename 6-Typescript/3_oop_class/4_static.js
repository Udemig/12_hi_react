/*
 ! Static
 * Static anahtar kelimesi özellik veya methodun sınıfın örneği olmadan kullanılmasını sağlar.
*/
//! Static Method:
// Doğrudan class üzerinden erişilebilen methodlar
var Matematik = /** @class */ (function () {
    function Matematik() {
        this.x = 10;
    }
    Matematik.prototype.topla = function (y) {
        console.log(this.x + y);
    };
    // static olan method class içerisindeki değişkenlere erişilemez (this kullanılamaz)
    Matematik.carp = function (a, b) {
        console.log(a * b);
    };
    return Matematik;
}());
// static olmayan methoda erişelim
// class'tan alınan örnek üzerinden erişilebilir
var math = new Matematik();
math.topla(20);
// static olan methoda erişme
// doğrudan class üzerinden erişebiliriz
Matematik.carp(6, 7);
//! Static Property:
// Doğrudan class üzerinden erişilebilen değişkenler
var Ogrenci = /** @class */ (function () {
    function Ogrenci(isim) {
        this.isim = isim;
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
var o1 = new Ogrenci("Ali");
var o2 = new Ogrenci("Fatma");
var o3 = new Ogrenci("Ahmet");
var o4 = new Ogrenci("Ayşe");
console.log(o1, o2, o3, o4);
console.log("Toplam Öğrenci", Ogrenci.ogrenciSayisi);
