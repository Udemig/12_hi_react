/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi

 * Benzer kategorideki değerleri bir arada tutmak için kullanılır.

 * İsimlendirme
 * İlk harfi büyük olur
 * Çoğul takısı kullanılmaz
 * Months X | Month ✔︎
*/

// Örn-1) Trfik ışığının aşamalarının verisini tutalım

// Klasik js ile
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// Typescript ile
enum Color {
  red,
  yellow,
  green,
}

// bunu seneryoda enum kullanmanın bize sağlaycağı fayda tip tanımı olarak kullanıbiliyor olamsı
const speak = (light: Color) => {
  switch (light) {
    case Color.red:
      return console.log("Lütfen durunuz");
    case Color.yellow:
      return console.log("Hazırlanın");
    case Color.green:
      return console.log("İlerleyebilirsiniz");
  }
};

// bu fonksiyonu kullanırken sadece color enum'undaki değerleri parametre olarak gönderebiliriz
speak(Color.red);

// Örnek - 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day1 = Gun.Carsamba;
let day2 = Gun[4];
let day3 = Gun[Gun.Pazar - 1];

console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3); // Cumartesi

// Örnek - 3
// Bir kargo sistesi yazıyoruz ve kullanıcılara arayüzde sıklıkla kargo durumunu bildirmemiz gerkeiyor.
// Bu durumda kargo aşamalarını js'te bir nesneye atar ve orada kullanırdık bu durunda enumda tutaruz
enum Status {
  pending = "Beklemede",
  processing = "Hazırlanıyor",
  shipping = "Dağıtımda",
  done = "Teslim Edildi",
  cancel = "İptal Edildi",
}

const updateStatus = (value: Status) => {
  // kargo durumunu günceller
};

updateStatus(Status.pending);

// Örnek - 4

enum Action {
  create = "CREATE",
  update = "UPDATE",
  delete = "DELETE",
}

const reducer = (state: any, action: Action) => {};

reducer(1, Action.create);
reducer(1, Action.update);
