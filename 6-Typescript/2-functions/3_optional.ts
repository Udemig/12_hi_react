/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerinin tamamına değer göndermemiz gerekir

 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz.

 * Tanım:
 * (a:string,b?:number) => bu kullanımda a parametresi zorunlu b ise opsiyonel olur
  
 * Eğer opsiyonel olan parametreye değer göndermezsek undefined değeri alur
 * Opsiyonel olan bir parametrenin ardından zorunlu bir parametre gelemez  
*/

// fonksiyonalrda opsiyonel parametre
function exaFunc(par1: number, par2?: string, par3?: boolean) {
  console.log("1.param", par1);
  console.log("2.param", par2);
  console.log("3.param", par3);
}

exaFunc(120, "selam", true);
exaFunc(120, "selam");
exaFunc(120);
exaFunc(120, undefined, false);

// nesnelerde opsiyonel durum
type Obj = {
  surname?: string;
  name: string;
  age: number;
};

const obj: Obj = {
  age: 30,
  name: "ahmet",
};

// Kullanım Örneği

const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman}, ${isim}`;
  } else {
    return `Merhaba, ${isim}`;
  }
};

console.log(karsilama("Ahmet"));

console.log(karsilama("Ali", "akşamlar"));
function hesapla(...sayilar: number[]) {
  const [birinci = 0, ikinci = 0, ...kalanlar] = sayilar;

  const carpim = birinci * ikinci;

  const toplam = kalanlar.reduce((toplamDegeri, sayi) => toplamDegeri + sayi, 0);

  return {
    carpim,
    toplam,
  };
}

console.log(hesapla(2, 3, 4, 5, 6));
