/*
 ! Constructor - İnşa methodu
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * New anahtar kelimesi ile birlikte class'ı çağırdığımızda ilk çalışan kod constructor.
 * Constructor ike class'a gelen parametrelere erişebilir.
*/

class Person {
  // 1) sınıfın ana özelilklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  //2) constructor yardımıyla dışarıdan değişkenlere değer ataması yapabiliyoruz
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }
}

const kisi1 = new Person("Burak", "Musa", 45);
const kisi2 = new Person("Can", "Yıldız", 25);

console.log("kişi1", kisi1);
console.log("kişi2", kisi2);

/*
 ! Challange
 * Bir teknolojik/ev alati için bir class yazınız
 * Bu class'ta oluşturduğunuz nesneler, değerlerini constructor'dan alsın.
 * Class en az 4 özellik ve 1 methoda sahip olsun
 * Bu class'tan en az 1 örnek oluşturun
 */

class AkilliSaat {
  marka: string;
  model: string;
  batarya: number;
  suGecirmez: boolean;

  constructor(marka: string, model: string, batarya: number, suGecirmez: boolean) {
    this.marka = marka;
    this.model = model;
    this.batarya = batarya;
    this.suGecirmez = suGecirmez;
  }
  bildirimGoster(mesaj: string) {
    console.log(mesaj);
  }
}

const saat = new AkilliSaat("Apple", "Watch", 48, true);
saat.bildirimGoster("Challange başarılıdır umarım");
