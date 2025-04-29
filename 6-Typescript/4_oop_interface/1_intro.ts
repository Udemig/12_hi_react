/*
 ! Interface
 * Bir nesnenin tipini tanımlamaya yarar
 * Nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder.

 ! Custom Type | Abstrac Class | Interface
 * Bunların herbiriyle nesne tipi tanımlayabiliyoruz

 ? Abstract Class vs Interface
 * Abstract class'lar aynı anda sadece bir class'ı miras alabilir.
 * Interface'ler tek seferde birden fazla interface'i miras alabilir
  
 ? Type vs Interface
 * Nesne tipi tanımlama açısından hiç bir farklı yanları yok
 * Type ile birlikte sadece nesne tipi değil dizi/tuple/function tipi de tanımlanabilir.
 * Interface ile sadece nesne tipi tanımlanabilir.
*/

// type
type PersonType = {
  name: string;
  age: number;
};

// interface
interface IPerson {
  name: string;
  age: number;
}

const kisi: IPerson = {
  name: "Ali",
  age: 55,
};

// type ile farklı türde tip tanımı da yapabilyoruz
type FnType = () => {};
type ArrayType = [string, string];
type UnionType = string | number | boolean;

// örn
// ileride oluşturucağımız bir geometrik şekil nesnenisin özellik ve methodlarını interface ile yazalım
interface IShape {
  width?: number;
  heigth?: number;
  corner?: number;
  radius?: number;
  calculateArea: () => number | string;
}

// Yukarıdaki interface ile bir nesne tipi tanımlayalım
const square: IShape = {
  width: 200,
  heigth: 200,
  corner: 4,
  calculateArea() {
    return this.width * this.heigth;
  },
};

// farklı bir nesne tanımında aynı interface'i kullanalım
const circle: IShape = {
  radius: 20,
  calculateArea: () => {
    return Math.PI * this.radius * this.radius;
  },
};
