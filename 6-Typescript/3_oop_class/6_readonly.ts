/*
 ! Readonly - Salt Okunur

 * Typescript'de bir sınıfın veya nesnenin içerisinde bir özelliğin sadece okunabilr olmasını sağlar.

 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıfırlarda sadece constructor ile değer ataması yapılabilir.
 * * Nesnelerde sadece değişkeni tanımlarken değer ataması yapabiliriz
*/

//! Nesnelerdeki Kullanımı
type Person = {
  isim: string;
  soyad: string;
  readonly tc_no: string;
};

const kisi: Person = {
  isim: "Mahmut",
  soyad: "Demir",
  tc_no: "235348573894",
};

kisi.isim = "Mehmet";
kisi.soyad = "Yıldız";
// kisi.tc_no = "3827478234654735"; // ? Readonly olduğu için değiştirelemez

//! Classlardaki Kullanımı
class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string = "Orhan Pamuk"; // tanımlarken değer ataması

  constructor(isim: string, sayfa: number, yazar: string) {
    this.isim = isim;
    this.sayfa = sayfa;
    this.yazar = yazar; //constructor içerisinde değer ataması
  }
}

const kitap = new Kitap("Hobbit", 500, "Tolkien");
console.log(kitap);

/*
 ! Challange
 * Bir class tanımlayın ve class'tan örnek oluşturun.
 * Bu class en az 4 özelliğe sahip olsun
 * En az 1 özelliği readonly olsun
 * Özellikleri tanımlarken erişişm belirteçlerini efektif bir şekilde kullanın
*/

class Ogrenci {
  private readonly ogrenciNo: number;
  public ad: string;
  public bolum: string;
  protected sinif: number;

  constructor(ogrenciNo: number, ad: string, bolum: string, sinif: number) {
    this.ogrenciNo = ogrenciNo;
    this.ad = ad;
    this.bolum = bolum;
    this.sinif = sinif;
  }

  public bilgiVer(): void {
    console.log(`${this.ad}, ${this.bolum} bölümünde okuyor ve ${this.sinif}. sınıfta.`);
  }
}

const ogrenci1 = new Ogrenci(1001, "Adnan Sami", "Bilgisayar", 1);

ogrenci1.bilgiVer();
