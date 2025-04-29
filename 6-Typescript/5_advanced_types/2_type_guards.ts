/*
 ! Type Guards
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılır.
 * 2 farklı typeGuards yöntemi mevcuttur (typeOf, instanceOf)
*/

// 1) typeOf operatorü ile typeGuard tekniğini uygulayalım
function log(input: string | number): void {
  console.log("tip", typeof input);

  if (typeof input === "string") {
    input.toLowerCase();
  } else {
    input.toFixed();
  }
}

log(568);
log("selam");

// instanceOf nedir?
// bir nesnenin hangi class'tan meydana geldiğini kontrol etmemizi sağlayan operatör
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log("Tavşan nesnesi Bird class'ından alınan bir örnek midir?", tavsan instanceof Bird);
console.log("Tavşan nesnesi Rabbit class'ından alınan bir örnek midir?", tavsan instanceof Rabbit);

// instanceOf operatörü ile typeGuard tekniği uygulama
class Cat {
  meow(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
