/*
 ! Partial
 * Typescript içerisinde varsayılan olarak bulunan bir type'tır
 * Generic olarak aldığı nesnenin bütün değerlerini opsiyonel yapar
 */

type User = {
  username: string;
  age: number;
  password: string;
};

const createUser = (user: User) => {
  // axios.post() > kullanıcının bütün değerlerini tanımla
};

const updateUser = (user: { username?: string; age?: string; password?: string }) => {
  // axiost.patch() > sadece güncellenicek değerleri tanımla
};

const updateUser2 = (user: Partial<User>) => {
  // axiost.patch() > sadece güncellenicek değerleri tanımla
};

createUser({ username: "ali", age: 34, password: "123" });
updateUser2({ age: 36 });
