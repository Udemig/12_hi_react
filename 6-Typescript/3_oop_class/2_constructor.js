/*
 ! Constructor - İnşa methodu
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * New anahtar kelimesi ile birlikte class'ı çağırdığımızda ilk çalışan kod constructor.
 * Constructor ike class'a gelen parametrelere erişebilir.
*/
var Person = /** @class */ (function () {
    //2) constructor yardımıyla dışarıdan değişkenlere değer ataması yapabiliyoruz
    function Person(yeni_ad, yeni_soyad, yeni_yas) {
        this.ad = yeni_ad;
        this.soyad = yeni_soyad;
        this.yas = yeni_yas;
    }
    return Person;
}());
var kisi1 = new Person("Burak", "Musa", 45);
var kisi2 = new Person("Can", "Yıldız", 25);
console.log("kişi1", kisi1);
console.log("kişi2", kisi2);
