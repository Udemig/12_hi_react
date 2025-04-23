/*
 ! Any Type
 * Bir değişkene any type atadığımız zman değişken herhangi bir türde değer alabilir ve bir tür kısıtlamasına maruz kalmaz.

 * Ts'de any type ile tanımlanmış olan bir değişkeni js değişkeni gibi davranır.

 * Otomati tamamlama ve tür kısıtlaması devre dışı kalır.

 * Normal şartlarda any kullanılması ts mantığına aykırıdır. Çünkü ts'deki amaç her değişkenin türünün belirli olması.

 * Any genelde "acil/geçici" durumlarda kullanırız.

 * Mutalaka any tipleri bir noktadan sonra kaldırılıp yerine doğru tiple kullanılmalı
*/

let foo: any;

foo = "string";

foo = 45;

foo = true;

foo = {};

foo = [];
