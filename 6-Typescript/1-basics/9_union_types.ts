/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin alabileceği birden fazla farklı türde veri varsa kullanılır
 
 * Örn: Bir şehir değişkeni var ama şehir ismi(string) mi yoksa plakası(number) mı olucak belli değil
 * Bu tarz durumlarda tipinin hem string hem de number olabilceğini söylemeliyiz
 */

let city: string | number;

city = "İstanbul";
city = 34;

// Örnek - 2
type IOS = {
  ios_version: number;
  airdrop_status: boolean;
  model: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: Android | IOS;

phone = {
  ios_version: 17.2,
  airdrop_status: true,
  model: "Iphone 16",
};

phone = {
  android_version: "Marshmellow",
  google_play_version: 4.3,
  device: "Samsung Note 15",
};

// Union Types'ı Nesneler İle Kullandığımızda

type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

let example: AType | BType;

// hata vermemesi için ya a tipinin bütün değerlerini tanımlamalıyız
example = { key1: "x", key2: "y" };

// hata vermemesi için ya b tipinin bütün değerlerini tanımlamalıyız
example = { key3: 4, key4: 5 };

// yada hem a hem b tipinin bütünde değerlerini tanımlayabiliriz
example = { key1: "x", key2: "y", key3: 3, key4: 5 };
