/*
 ! Readonly - Salt Okunur

 * Typescript'de bir sınıfın veya nesnenin içerisinde bir özelliğin sadece okunabilr olmasını sağlar.

 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıfırlarda sadece constructor ile değer ataması yapılabilir.
 * * Nesnelerde sadece değişkeni tanımlarken değer ataması yapabiliriz
*/
var kisi = {
    isim: "Mahmut",
    soyad: "Demir",
    tc_no: "235348573894",
};
kisi.isim = "Mehmet";
kisi.soyad = "Yıldız";
// kisi.tc_no = "3827478234654735"; // ! Readonly olduğu için değiştirelemez
// Classlardaki Kullanımı
var Kitap = /** @class */ (function () {
    function Kitap(isim, sayfa, yazar) {
        this.yazar = "Orhan Pamuk"; // tanımlarken değer ataması
        this.isim = isim;
        this.sayfa = sayfa;
        this.yazar = yazar; //constructor içerisinde değer ataması
    }
    return Kitap;
}());
var kitap = new Kitap("Hobbit", 500, "Tolkien");
console.log(kitap);
