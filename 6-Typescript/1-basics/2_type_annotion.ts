/*
 ! Type Annotations
 * Javascript'te değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat typescript'de tanımladığımız değişkenlerin tiplerinide biz belirleyebiliyoruz.
 * Bu sayede deper ataması yaparken belirlenen tip kısıtlaması dışarısına çıkamıyoruz.
 * Bu kodda oluşabilcek hataların erkendan farkına varmamızı sağlar.
 */

let foo: number = 30;

foo = 45;

/*
 * Javascript'de bulunan veri tipleri:
 * number
 * string
 * boolean
 * object
 * array
 * function
 * Date
 * null
 * undefined
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 */

let value1: number = 35;
let value2: string = "udemig";
let value3: boolean = false;
let value4: object = { id: 1 };
let value5: object = [1, 2, 3, 4, 5]; // dizi tipi böyle tanımlanmaz
let value6: Function = () => {};
let value7: Date = new Date();
let value8: null = null;
let value9: undefined = undefined;
let value10: symbol = Symbol(1234);
let value11: bigint = BigInt(9007199254740991);

// Type Inferance
// Eğer bir değişkenin tipini belirtmezseniz o değişkenin tipi otomatik olarak değerin tipine eşitlenir
// Bu özelliği mümkünse hiç kullanmazsak daha iyi
// Çünkü bazen tipi olduğundan farklı algılayabiliyor.
let value12 = "deneme";
let value13 = 56;

/*
 * Javascript'de veri türleri ikiye ayrılır

 * 1) Primitive Veri Türleri
 * Değer üzerinde saklanır ve kopyalanır. Değerleri değiştirilemez ve bellekte doğrudan saklanır.
 * Hafızada sabit bir alan kaplar
 * Bellekte değişkenin kendisi saklanır.
 * Bir değişkene başka bir değişkenin değeri atanırsa, kopyası alınır ve yeni değişjende değişiklik yapmak orjinalini etkilemez
 - string
 - number
 - boolean
 - undefined
 - null
 - symbol
 - bigint
*/

let x = 5;

let y = x; // y, x'in değerinin bir kopyasını alır

y = 20;

console.log(x); // 5

/*
 * 2) Non-Primitive (Referans) Veri Türleri
 * Referans üzerinden saklanır. Değerleri değiştirilebilir ve bellekte referansı tutulur.
 * Bellekte bir referans (adres üzerinden saklanır)
 * Bir değişkene farklı bir değişkenin değeri atanırsa, aynı referansı paylaşıyorlar.
 * Bir değişkende yapılan değişiklik diğerlerinide etkiler
 
 - Object
 - Array
 - Function
 - Date
*/

let obj1 = { name: "Ali" };

let obj2 = obj1; // obj2, obj1 ile aynı referansı paylaştılar

obj2.name = "Veli";

console.log(obj1); // Veli
