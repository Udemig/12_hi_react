/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılığı yere özel farklı bir tipte algılanmasını istiyorsak type casting kullanırız

 * As operatörü kullanıldığı kod satırının değişkeninin tipini değiştirmeye yarar
*/

type Product = {
  name: string;
  price: number | string;
};

let product1: Product = {
  name: "Laptop",
  price: 453,
};

/*
 * Normalde price string veya number olabilceğinden
 * Number'a özgü olan toFixed() methodunu kullanamıyoruz
 * As kullanarak aşağıdaki kod satırına özel price değişkenin tipini number olarak değiştirelim
 * Bu sayedede number'a özgü toFixed() methodunu kullanabilyoruz
 */

const x = (product1.price as number).toFixed(2);
console.log(x);

// Örnek - 2
// Bu kisi verisi bize firebase gelmiş olsun (type'ıda firebase belirlemiş olsun)
let kisi: unknown = {
  name: "John",
  age: 45,
  address: "1234 sokak",
};

// kişi nesnenin tipi unknown olduğu için name değerine erişmiyoruz
// kisi.name;

// nesne için bir tip oluşturalım
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnesinin değerlerine erişmek için varsayılan uknown olan tipini değiştir
(kisi as IPerson).name;
