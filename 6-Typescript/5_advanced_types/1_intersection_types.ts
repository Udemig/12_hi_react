/*
 * Intersection Types - Kesişim / Birleşmiş Tip
 * Typescript'de kesiişim türler iki veya daha fazla türü birleştirmek için kullanılır
 */

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki tipin bütün özelliklerini birleştirelim
type ABType = AType & BType & { key3: boolean };

let foo: ABType = { key1: "merhaba", key2: 46, key3: true };

// Union Type: Belirlenen türlerin en az birinin bütün özelliklerinin tanımlanması yetrli olur
type AorBType = AType | BType;

let bar: AorBType = { key1: "merhaba" };
let baz: AorBType = { key2: 56 };
let ban: AorBType = { key1: "merhaba", key2: 56 };

// Intersection Type Örnek
type BusinessPartner = {
  credit: number;
  name: string;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = BusinessPartner & Identity;
type VipCustomer = Identity & Contact & BusinessPartner;

const customer: Customer = {
  id: 123123,
  credit: 900670,
  name: "ali",
};

/*
 ! Challange
 * Intersection types kullandığınız bir tip tanımlayın
 * Tanımladığınız tipi bir nesne üzerinde kullanarak değer tanımıda yapın
*/

// Temel tipler
type Malzemeler = {
  malzemeListesi: string[];
  kisiselTarifMi: boolean;
};

type PismeBilgisi = {
  pisirmeSuresi: number;
  pisirmeYontemi: "fırın" | "ocak" | "ızgara" | "haşlama";
};

type TarifDetay = {
  ad: string;
  porsiyon?: number;
  kategori?: "tatlı" | "ana yemek" | "atıştırmalık";
  zorlukSeviyesi?: "kolay" | "orta" | "zor";
};

// Üç tipi birleştiriyoruz
type YemekTarifi = Malzemeler & PismeBilgisi & TarifDetay;

// Kullanım
const tarif: YemekTarifi = {
  ad: "Fırında Sebzeli Tavuk",
  porsiyon: 4,
  kategori: "ana yemek",
  zorlukSeviyesi: "orta",
  malzemeListesi: ["tavuk göğsü", "kabak", "patates", "havuç", "zeytinyağı", "tuz", "karabiber"], // Malzeme listesi düzeltildi
  kisiselTarifMi: true,
  pisirmeSuresi: 45,
  pisirmeYontemi: "fırın",
};

console.log(tarif);
