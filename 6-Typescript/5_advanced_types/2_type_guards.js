/*
 ! Type Guards
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılır.
 * 2 farklı typeGuards yöntemi mevcuttur (typeOf, instanceOf)
*/
// 1) typeOf operatorü ile typeGuard tekniğini uygulayalım
function log(input) {
    console.log("tip", typeof input);
    if (typeof input === "string") {
        input.toLowerCase();
    }
    else {
        input.toFixed();
    }
}
log(568);
log("selam");
// instanceOf nedir?
// bir nesnenin hangi class'tan meydana geldiğini kontrol etmemizi sağlayan operatör
var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
var Rabbit = /** @class */ (function () {
    function Rabbit() {
    }
    return Rabbit;
}());
var tavsan = new Rabbit();
console.log("Tavşan nesnesi Bird class'ından alınan bir örnek midir?", tavsan instanceof Bird);
console.log("Tavşan nesnesi Rabbit class'ından alınan bir örnek midir?", tavsan instanceof Rabbit);
