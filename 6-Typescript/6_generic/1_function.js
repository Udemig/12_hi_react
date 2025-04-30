/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarak dışarıdan gelen değere bağlı değişmesiini istediğimiz durumlarda kullanırız
 * Bu durumunda generi cözelliğini kullarnaarka dışarıdan parametre olarak tip alabiliyoruz
*/
// Yazıcağımız fonksiyon:
// 1) Number dizisi gelirse rastgele bir sayı döndürmeli
// 2) String dizisi gelirse rastgele bir string döndürmeli
// Union kullandığızmıda return tipi ya string ya number olucak diyoruz
var getRandomNumber = function (array) {
    var i = Math.round(Math.random() * array.length);
    return "selam";
};
console.log(getRandomNumber([3, 5, 4, 6, 7, 9, 8, 1, 2]));
console.log(getRandomNumber(["A", "B,", "C", "D", "E"]));
