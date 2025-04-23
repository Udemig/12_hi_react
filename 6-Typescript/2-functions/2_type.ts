/*
 * Typescript'de bir fonlsiyonun tipini doğrudan fonksiyonu tanumlarken ifade etmek yerine custom type ile ayrı bir noktada tanımlayıp tekrar kullanbiliyoruz
 */

// tekrar eden bir fonksiyon tipi olsun
// 1.yol) fonksiyon üzerinde tip tanımla

let func1 = (par1: string, par2: number): string => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};
let func2 = (par1: string, par2: number): string => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};
let func3 = (par1: string, par2: number): string => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};

// type ile fonksiyon tipi tanımlarken fonksiyonun görevi belli olmadığı için ""=>"" devamına {} açmayız onun yerine return tipini yazarız
// 2.yol) kendi tipimizi oluştururuz
type FuncType = (par1: string, par2: number) => string;

let func4: FuncType = (par1, par2) => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};
let func5: FuncType = (par1, par2) => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};
let func6: FuncType = (par1, par2) => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};

/*
 ! Challange
 * Yukarıdaki 2.yolda olduğu gibi bir fonksiyon tipini ayrıca tanımlayın ve bu tipi fonksiyonda kullanın

 * * kişinin bulunduğu şehri ve o şehirdeki havanın derecesini alsın
 * * derece 30 'dan fazlaysa ".... konunmu oldukça sıcak ve ..... derece"   
 * * derece 30-0 aralığında ise  ".... konunmu ılık ve ..... derece"   
 * * derece 0 altında ise  ".... konunmu oldukça soğtu ve ..... derece"   
 
 * şeklinde bir metin return eden fonksiyon yazınız tipini yukarıda belirtildiği gibi tanımlayın 
*/

// Cevap
type WeatherType = (city: string, degree: number) => string;

const weatherCondition: WeatherType = (city, degree) => {
  if (degree > 30) {
    return `${city} is extremely hot with a temperature of ${degree}°C.`;
  } else if (degree >= 0 && degree <= 30) {
    return `${city} has mild weather with a temperature of ${degree}°C.`;
  } else {
    return `${city} is very cold with a temperature of ${degree}°C.`;
  }
};

console.log(weatherCondition("Warsaw", 34)); // Warsaw is very hot with 34°C.
console.log(weatherCondition("Warsaw", 12)); // Warsaw is mild with 12°C.
console.log(weatherCondition("Warsaw", -3)); // Warsaw is very cold with -3°C.
