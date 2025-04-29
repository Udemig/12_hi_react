/*
 * Interface type'larda olduğu gibi farklı bir bir/kaç interface'inze özelliklerini miras alabilir.
 * Miras alma extends anahtar kelimesi ile gerçekleşir.
 * Sınıflardan farklı olarak istersek birden fazla interface'i tek seferde miras alabiliriz
 */

// bir interface oluşturalım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
}

// yeni bir interface oluşturalım ve öncekini miras al
interface IMobilya extends IEvEsyasi {
  renk: string;
}

// interface'i bir nesne tipi tanımında kullanalım
const masa: IMobilya = {
  isim: "Yemek Masası",
  fiyat: 200,
  renk: "Siyah",
};

// farklı bir interface oluşturalım
interface IElektronik {
  marka: string;
  garantiSuresi: number;
  şarj?: number;
}

// birden fazla interface'i miras al
interface IUrun extends IElektronik, IMobilya {
  id: string;
}

const tv: IUrun = {
  id: "213dsgdfsg",
  marka: "LG",
  garantiSuresi: 4,
  renk: "siyah",
  isim: "Akıllı TV",
  fiyat: 50000,
};

/*
 ! Challange
  * İlk olarak 2 farklı interface tanımlayın
  * Ardından 3. bir interface oluşturup ilk 2 interface'i miras olarak alıp genişletin
  * Son olarak bu interface'i bir nesnenin tipini tanımlarken kullanın
 */

interface Info {
  groupName: string;
  musicType: string;
  year: number;
  company: string;
}

interface Song {
  lyrics: string;
  songName: string;
  time: number;
}

interface Songs {
  songs: Song[];
  enstrumants: string[];
}

interface Album extends Info, Songs {
  albumName: string;
}

const xs: Album = {
  albumName: "Legends",
  groupName: "The Wailers",
  musicType: "Reggae",
  year: 1970,
  company: "Island Records",
  songs: [], // isteğe göre şarkı
  enstrumants: ["guitar", "drums"],
};

console.log(xs);
