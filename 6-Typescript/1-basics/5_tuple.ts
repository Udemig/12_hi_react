/*
 ! Tuple Type
 * Typescript ile birlikte hayatımıza giren veritipidir.
 * Uzunluğu ve elemanlarının sırası/tipi sabit olan dizilerin tip tanımı için kullanılır.
 * Genelde az sayıda elemana sahip olan ve elemanlarının sırası aynı olan dizilerde kullanılır.
*/

// Örnek - 1

// x yanlış (union types)
const ders1: (string | number)[] = ["matematik", 3, 3, 3, 3, 3, 3, 3];

// ✔︎ doğru (tuple)
const ders2: [string, number] = ["veritbanı tasarımı", 2];

// Örnek - 2
const gradient: [string, number, number] = ["to-right", 252525, 565656];

// Örnek - 3
// Bir css rgb/rgba renginin versisini dizi olarak tutalım
// rgb(123,48,67)
// rgba(123,48,67,0.6)

// bu seneryoda sondaki değeri opsiyonel yapmalıyız
let color: [number, number, number, number?];

color = [123, 48, 67];
color = [123, 48, 67, 0.9];

// Örnek - 4
// Birden fazla opsiyonel değer olduğu seneryoda
// Bir opsiyonel değerin ardından zorunlu bir değer gelemez
let date: [number, (string | number)?, number?];

date = [10, 1, 1987];
date = [10, "Ocak"];
date = [10, undefined, 1987];
date = [10];
