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
var yoklama = function (teacher) {
    var students = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        students[_i - 1] = arguments[_i];
    }
    console.log(teacher + " öğretmen yoklamay başladı");
    console.log("------------------------------------");
    students.forEach(function (student) { return console.log(student + " burdaaaaa!"); });
    console.log(students.length + " öğrenci var");
};
yoklama("Merve", "Ali", "Ahmet", "Mehmet", "Ayşe", "Fatma", "Burak", "Kadir");
