/*
 ! Type Aliases | Custom Type
 * Şuana kadar tip ataması yaparken js'de var olan temek tiplerin yanısıra ts'deki bir iki kullandık.
 * Gerçek projelerde o anki yaptığımız işe özel sepesifik veri tiplerine ihtiyaç duyabiliyoruz.
 * Bunları tanımlamak için type anahtar kelimesini kullanırız.
 
 * Neden ihityacımız var ? 
 * * Çünkü belirlediğimiz bir type'ı proje içeriisnde bir çok alanda / sayfada kullanmamız gerekbilir.
 * * Bu noktada tipleri kendimiz oluştururuz.
*/

// Örnek - 1
// kendi özel tipimizi oluşturalım
type metin = string;

// kendi oluşturduğumuz tipi kullanalım
let kullanıcı_ismi: metin = "Ahmet";

// Örnek - 2
// Uçuş projesinde sıkça kullandığımız enlem ve boylam değerleri var

let xCoords2: [number, number] = [34.56456, 56.786978];
let yCoords2: [number, number] = [16.34645, 78.233543];
let zCoords2: [number, number] = [16.34645, 78.233543];

let flightRoute2: [number, number][] = [
  [34.56456, 56.786978],
  [16.34645, 78.233543],
  [16.34645, 78.233543],
];

// Sıklıkla aynı tipi kullandığımız için kendi type'ımızı oluşturucaz
type Geo = [number, number];

let xCoords1: Geo = [34.56456, 56.786978];
let yCoords1: Geo = [16.34645, 78.233543];
let zCoords1: Geo = [16.34645, 78.233543];

let flightRoute1: Geo[] = [
  [34.56456, 56.786978],
  [16.34645, 78.233543],
  [16.34645, 78.233543],
];

// Örnek - Aynı tipi birden fazla kullanmamız gerek bir seneryo

let user1: { id: number; name: string; age: number } = { id: 1, name: "Ali", age: 45 };

let user2: { id: number; name: string; age: number } = { id: 2, name: "Ayşe", age: 23 };

let updateUser = (newUser: { id: number; name: string; age: number }) => {};

// type aliases ile tekrara düşen tipi ayrıca tanımlayıp tekrarı önleyebiliriz

type UserType = { id: number; name: string; age: number };

let user3: UserType = { id: 1, name: "Ali", age: 45 };

let user4: UserType = { id: 2, name: "Ayşe", age: 23 };

let updateUser5 = (newUser: UserType) => {};
