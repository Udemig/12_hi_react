/*
 * Typescript, js'in bazı önemli açıklarını düzeltmek için microsoft tarafından geliştirilen bir programlama dilidir.

 * Neden Typescript?
 * * JS'de koddaki hataları anca runtime'da görürüz.
 * * Typescript'te ise koddaki hataları kod editöründe görürüz.

 * * JS'de tanımladığımız değişkene daha sonra değer ataması yaparken farklı tipte değer atayabiliyoruz
 * * Typescript'te ise bir değişkene farklı tipte değer atayamayız.
 
 * *  JS'de çok kısıtlı bir oto. tamamlama desteği bulunuyor.
 * * Typescript'te ise API'dan gelen verilerde dahi tamamlama desteği bulunuyor.
 
 * * Not
 * * Typescript kodları tarayıcı tarafından doğrudan çalıştırılamazlar.
 * * Bundan dolayı bir compiler (tsc) ile ts kodunu js koduna çevirmemiz gerekiyor çalıştırmadan önce.
*/

let z: string = "furkan";

z = "evin";

// console.log(b); ! cannot find name 'b'
