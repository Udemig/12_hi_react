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
function exaFunc(par1, par2, par3) {
    console.log("1.param", par1);
    console.log("2.param", par2);
    console.log("3.param", par3);
}
exaFunc(120, "selam", true);
exaFunc(120, "selam");
exaFunc(120);
exaFunc(120, undefined, false);
var obj = {
    age: 30,
    name: "ahmet",
};
// Kullanım Örneği
var karsilama = function (isim, zaman) {
    if (zaman) {
        return "\u0130yi ".concat(zaman, ", ").concat(isim);
    }
    else {
        return "Merhaba, ".concat(isim);
    }
};
console.log(karsilama("Ahmet"));
console.log(karsilama("Ali", "akşamlar"));
