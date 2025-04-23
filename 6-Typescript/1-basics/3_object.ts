/*
 ! Object Type
 * Normal şartlarda ts'de bir object type'ı mevcuttur.
 * Ama object type'ı ucu çok açık bir type olduğu için kullanılmasını pek tercih etmeyiz.
 * Biz gemelde daha spesifik bir şekilde özellikleri ve tipi belirli olan nesnelerle çalışır.
 */

// doğru değil
let data: object;

data = {};

data = [];

data = () => {};

data = new Date();

// nesne tipi tanımlamanın doğru yolu
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
};

// tanımladığımız tipe uygun şekilde değer tanımı
student = {
  id: 132,
  firstname: "furkan",
  lastname: "evin",
  isGraduated: true,
};
