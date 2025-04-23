/*
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array / object / tuple
 * string literal
 * union type
 * any
 * tiplerine sahip bir nesne tipi tanımlayın
 * ve oluşturuğunuz tipe göre bir nesnenin değerlerini tanımlayın
 */

type MouseType = {
  color: string;
};

const mouse: MouseType = {
  color: "black",
};

// Cevap
type SinemaDelisi = {
  adSoyad: string; // string
  yas: number; // number
  uyeMi: boolean; // boolean
  favoriTurler: string[]; // array
  enSevdigiFilm: {
    // object
    baslik: string;
    yonetmen: string;
    yil: number;
  };
  unutulmazReplik: [string, string]; // tuple: [replik, film adı]
  uyelikTuru: "standart" | "premium" | "vip"; // string literal
  patlamisMisirTercihi: undefined; // undefined
};

const EmekSineması: SinemaDelisi = {
  adSoyad: "Narla",
  yas: 45,
  uyeMi: true,
  favoriTurler: ["bilim kurgu", "dram", "komedi"],
  enSevdigiFilm: {
    baslik: "Eternal Sunshine of the Spotless Mind",
    yonetmen: "Michel Gondry",
    yil: 2004,
  },
  unutulmazReplik: [
    "Aklımdan seni silmeye çalışmak, seni daha çok hatırlatıyor.",
    "Eternal Sunshine of the Spotless Mind",
  ],
  uyelikTuru: "vip",
  patlamisMisirTercihi: undefined,
};

// Cevap - 3

type Telefon = {
  model: string;
  hafizaGB: number;
  besGDestegi: boolean;
  renkler: string[];
  kamera: { on: number; arka: number };
  isletimSistemi: "iOS" | "Android";
  aksesuar: string | boolean;
  diger: any;
};

const benimTelefonum: Telefon = {
  model: "İphone 14",
  hafizaGB: 256,
  besGDestegi: true,
  renkler: ["siyah", "mavi"],
  kamera: { on: 12, arka: 50 },
  isletimSistemi: "iOS",
  aksesuar: "Kablosuz kulaklık",
  diger: { garanti: "2 yıl" },
};

// Örn - 4
type Film = {
  baslik: string;
  yil: number;
  izlendimi: boolean;
  turler: string[];
  yonetmen: string;
  durum: "yayında" | "arsivde";
  not: any;
};

const film1: Film = {
  baslik: "Gökyüzü Rüyası",
  yil: 2023,
  izlendimi: true,
  turler: ["dram", "bilim kurgu"],
  yonetmen: "merve aydın",
  durum: "yayında",
  not: "23-04-2025",
};

// örn - 5
type FootballPlayerType = {
  name: string;
  age: number;
  isCaptain: boolean;
  positions: string[];
  stats: { goals: number; assists: number };
  performance: [number, number];
  foot: "left" | "right" | "both";
  status: "active" | "injured" | number;
  extraInfo: any;
};

const player: FootballPlayerType = {
  name: "Mert Durdu",
  age: 31,
  isCaptain: true,
  positions: ["midfielder", "winger"],
  stats: {
    goals: 12,
    assists: 9,
  },
  performance: [7.8, 24],
  foot: "right",
  status: "active",
  extraInfo: {
    nationality: "Turkish",
    club: "Ankara FC",
    hobbies: ["gaming", "coding"],
  },
};

// örn - 6
type Araba = {
  marka: string;
  model: string;
  yil: number;
  kilometre: number;
  yakitTipi: "Benzin" | "Dizel" | "Elektrik" | "Hibrit";
  ozellikler: string[];
  motor: { hacim: number; beygirGucu: number };
  sahibi?: string;
  servisGecmisi: Array<{ tarih: string; islem: string; ucret: number }>;
  aktif: boolean;
};

const yeniArabam: Araba = {
  marka: "Volkswagen",
  model: "Passat",
  yil: 2023,
  kilometre: 15000,
  yakitTipi: "Dizel",
  ozellikler: ["Otomatik Şanzıman", "Deri Koltuk", "Geri Görüş Kamerası", "Navigasyon"],
  motor: { hacim: 2.0, beygirGucu: 150 },
  servisGecmisi: [
    { tarih: "2023-10-15", islem: "Periyodik Bakım", ucret: 2500 },
    { tarih: "2024-03-20", islem: "Yağ Değişimi", ucret: 1200 },
  ],
  aktif: true,
};

// örn - 8
type LaptopType = {
  color: string;
  year: 2024 | 2023 | 2022;
  isWorking: "true" | "false";
  tags: string[];
  extra: any;
};

const myLaptop: LaptopType = {
  color: "silver",
  year: 2023,
  isWorking: "true",
  tags: ["ultrabook", "touchscreen"],
  extra: { battery: "6h", madeIn: "Japan" },
};
