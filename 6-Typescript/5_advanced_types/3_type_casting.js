/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılığı yere özel farklı bir tipte algılanmasını istiyorsak type casting kullanırız

 * As operatörü kullanıldığı kod satırının değişkeninin tipini değiştirmeye yarar
*/
var product1 = {
    name: "Laptop",
    price: "selam",
};
/*
 * Normalde price string veya number olabilceğinden
 * Number'a özgü olan toFixed() methodunu kullanamıyoruz
 * As kullanarak aşağıdaki kod satırına özel price değişkenin tipini number olarak değiştirelim
 * Bu sayedede number'a özgü toFixed() methodunu kullanabilyoruz
 */
var x = product1.price.toFixed(2);
console.log(x);
