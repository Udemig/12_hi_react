/*
 ! Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanırız.

 * Özellikleri
 * Bir parametreye rest paraemtre yapmak için "..." kullanırız.
 * Bir rest parametrenin ardından herhangi bir farklı parametre yazılamaz
 * Sebebi ise res paramın kaç değer alıcağının belirli olmaması
 * Rest parametrenin aldığı değerler en son dizi haline getirilir
*/

// Örnek

const yoklama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " öğretmen yoklamay başladı");
  console.log("------------------------------------");
  students.forEach((student) => console.log(student + " burdaaaaa!"));
  console.log(students.length + " öğrenci var");
};

yoklama("Merve", "Ali", "Ahmet", "Mehmet", "Ayşe", "Fatma", "Burak", "Kadir");

/*
 ! Challange
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız
 * Parametre olarak aldığı ilk 2 sayıyı çarpsın
 * İlk 2 parametreden geriye kalan bütün sayıları toplasın
 * Toplam ve çarpımı bir nesne içerisinde return etsin
  
 * hesapla(2,3,4,5,6) =====> {carpim:6,toplam:15} 
*/

const hesapla = (sayi1: number, sayi2: number, ...sayilar: number[]) => {
  const carpim = sayi1 * sayi2;
  const toplam = sayilar.reduce((acc, sayi) => acc + sayi, 0);
  return { carpim, toplam };
};
console.log(hesapla(1, 2, 3, 4));
