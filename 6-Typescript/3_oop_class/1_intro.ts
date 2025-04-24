/*
 ! OOP (Object Orianted Programming)
 * Nesne yönelimli programalama, yazılım geliştirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım yazılımı nesneler ve bu nesneler arasındaki etkileşimler üzerinden yapmaya çalışır
   
 * OOP'nin temel kavramları:
 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface
 
 * OOP'nin temel amacı, kodu daha anlaşışlır, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır.
 * Bu yaklaşım özellikler büyük çapta projelerde oldukça fayda sağlar 
*/

/*
 ! Sınıf (Class)
 * Sınıflar, nesnelerin bir şablonudur.
 * Bir sınıf, belirli türdeki nesneler için veri ve fonksiyon tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olcauğu özellikler (renk,marka,şanzıman) ve davranışlar (hızlanma,fren,vites) tanımlanabilir.
*/

class OldPhone {
  // properties - özellikler
  telefon_tipi: string = "entegre";
  tus_takimi: string = "çevirmeli";
  govde: "yatay" | "dikey" = "yatay";

  // methods - fonksiyonlar
  ahizeAc(): void {
    console.log("ahize açılıyor");
  }
  numaraCevir(telNum: string): void {
    console.log(telNum + " çalıyor...");
  }
}

/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir şey ifade etmez
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladıktan sonra çağırırız ve görevini yapar
 * Class'larda da durum aynıdır class'ı new ile çağrırız ve bize bir nesne oluşturur.
 * Class'ın oluşturduğu nesneye instance (örnek) denir
*/

const telefon_1 = new OldPhone();
const telefon_2 = new OldPhone();

telefon_2.tus_takimi = "tuşlu";
telefon_2.telefon_tipi = "yatay";
telefon_2.govde = "dikey";

console.log("telefon1", telefon_1);
console.log("telefon2", telefon_2);
telefon_1.ahizeAc();
telefon_1.numaraCevir("03253478534");
