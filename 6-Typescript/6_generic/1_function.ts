/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarak dışarıdan gelen değere bağlı değişmesiini istediğimiz durumlarda kullanırız
 * Bu durumunda generi cözelliğini kullarnaarka dışarıdan parametre olarak tip alabiliyoruz
*/

// Yazıcağımız fonksiyon:
// 1) Number dizisi gelirse rastgele bir sayı döndürmeli
// 2) String dizisi gelirse rastgele bir string döndürmeli

// Union type kullandığızmıda return tipi ya string yada number olucak diyoruz.
// Buda yukarıda yazdığımız tanıma uygun değil number yani number[] geldiğinde fonksiyon string de döndürebilir diyoruz
const getRandomNumber = (array: number[] | string[]): number | string => {
  const i = Math.round(Math.random() * array.length);

  return "selam";
};

console.log(getRandomNumber([3, 5, 4, 6, 7, 9, 8, 1, 2]));
console.log(getRandomNumber(["A", "B,", "C", "D", "E"]));

// Generic yardımıyla fonksiyonu tekrar yazalım
// parametre ve return tipini generic olarak daha sonra alıcaz
const getRandomEle = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

// fonksiyonu çağırırken generic olan TypeParam'a tip gönderiyoruz
getRandomEle<string>(["A", "B", "C", "D", "E"]);
getRandomEle<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/*
 * React Projesinde
 * useState<number>()
 * axios.get<Person[]>()
 */
