class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["f", "e", "a", "b", "c", "d"]);
const arr2 = new Sorter<number>([9, 8, 7, 1, 2, 3, 4, 5, 6]);
const arr3 = new Sorter<boolean>([true, false, true]);

console.log(arr1.sortData());
console.log(arr2.sortData());

// Generic Özellik
// Tipi generic olarak tanımladığımızda her türlü tipte değer alabilmesinin önünü açıyoruz
// Bundan dolayı bazı durumlarda alabileceği tipte kısıtlama isteyebiliriz
// Extends ile T generic tipi dışarıdan sadece string veya number tipi alabilecek şekilde kısıtlayabiliriz
class Container<T extends string | number | boolean> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

new Container<string>("Uçak");
new Container<number>(56);
new Container<boolean>(true);
// new Container<object>({});
// new Container<Date>({});

/*
 ! Challange
 * En az 1 generic tip alan bir type / interface / function / class yazınız
 * Tanımladığınız yapıyı en az 1 kez kullanın
 * Bonus: extends kulan
*/

interface TemelEtkinlikKaydi {
  etkinlikId: string;
  katılımcıAdı: string;
  tarih: string;
}

interface EtkinlikKaydi<T extends TemelEtkinlikKaydi> {
  veri: T;
  kaydet: (bilgi: T) => void;
}

interface TiyatroEtkinligi extends TemelEtkinlikKaydi {
  koltukNo: string;
  oyunAdi: string;
}

const tiyatroKaydi: EtkinlikKaydi<TiyatroEtkinligi> = {
  veri: {
    etkinlikId: "525",
    katılımcıAdı: "Esra Akgündoğdu",
    tarih: "2025-05-25",
    koltukNo: "A12",
    oyunAdi: "Bir Delinin Hatıra Defteri",
  },
  kaydet: (bilgi) => {
    console.log(` ${bilgi.katılımcıAdı}, "${bilgi.oyunAdi}" oyununa başarıyla kayıt oldu.`);
    console.log(`Etkinlik Kodu: ${bilgi.etkinlikId} | Tarih: ${bilgi.tarih} | Koltuk: ${bilgi.koltukNo}`);
  },
};

tiyatroKaydi.kaydet(tiyatroKaydi.veri);
