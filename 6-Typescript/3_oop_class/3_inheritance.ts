/*
 ! Inheritance (Kalıtım | Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendiririr.
 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir...
 * Alt sınıf (Derived | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alır.
*/

// Parent Class
class GeometrikSekil {
  ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şekildir`);
  }
}

// Derived Class - Constructor Yok
class Dikdortgen extends GeometrikSekil {
  uzunluk = 30;
  genislik = 100;
}

const d = new Dikdortgen("Dikdörtgen");
console.log(d);
d.tanim();

// Derived Class - Constructor Var
class Daire extends GeometrikSekil {
  yaricap: number;

  constructor(yaricap: number) {
    super("Daire"); // parent class'ın constructor'ına değer gönder
    this.yaricap = yaricap;
  }
}

const daire = new Daire(100);
console.log(daire);
daire.tanim();

// Parent
class Arac {
  marka: string;
  model: string;
  yakit: string;

  constructor(marka: string, model: string, yakit: string) {
    this.marka = marka;
    this.model = model;
    this.yakit = yakit;
  }

  calistir(): void {
    console.log("Araca giriş yapılıyor");
  }
}

// Child
class Araba extends Arac {
  // miras alınan class'a yeni özellik ekle
  vites_tipi: "manuel" | "otomatik";

  constructor(marka: string, model: string, yakit: string, vites_tipi: "manuel" | "otomatik") {
    super(marka, model, yakit);
    this.vites_tipi = vites_tipi;
  }

  // Method Overring: Miras olarak alınan methodun üzerine yaz
  calistir(): void {
    super.calistir(); // üst sınıftaki çalıştır methdounu tetikler
    console.log("Kontak çevriliyor");
  }
}

const araba1 = new Araba("BMW", "420", "benzin", "otomatik");
console.log(araba1);
araba1.calistir();

// Bir class aynı anda birden fazla class'ı miras alamaz
// Ama miras alma olayı birden fazla kez gereçkleşebilir

class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color = "Kahverengi";
}

class Mother extends Human {
  eye_color = "Mavi";
}

class Son extends Father {}

const son = new Son();
console.log(son); //  { eye_color: 'Kahverengi' }
