/*
 * Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanalılabilir type ve interface'ler oluşturmak içinde kullanabiliriz
 */

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const arr1: ArrayType<string> = {
  items: ["A", "B", "C"],
  addItem(newItem) {
    this.items.push(newItem);
  },
  getItem(index) {
    return this.items[index];
  },
};

const arr2: ArrayType<number> = {
  items: [1, 2, 3, 4],
  addItem(newItem) {
    this.items.push(newItem);
  },
  getItem(index) {
    return this.items[index];
  },
};

// İsimlendirme
// Tek harf ve genelde: T,R,Z,E,V,A,S,D....
interface IPerson<T, R> {
  name: T;
  age: R;
  id: R;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  name: "Ahmet",
  age: 34,
  id: 12314,
  father: "Faruk",
  mother: "Fatma",
};

// Proje Örneği

// Api'dan böyle bir cevap geldi:
const apiResponse = {
  data: [
    {
      id: 1,
      name: "Classic Margherita Pizza",
      time: 15,
      servings: 4,
    },
    {
      id: 2,
      name: "Classic Margherita Pizza",
      time: 20,
      servings: 4,
    },
  ],

  total: 100,
  skip: 0,
  limit: 30,
  status: "success",
  ok: true,
};

interface Recipe {
  id: number;
  name: string;
  time: number;
  servings: number;
}

interface Post {
  id: string;
  title: string;
  views: number;
}

// Generic Kullanmadan:
// data'daki farklı tip için yeni interface oluşturma..
interface RecipeResponse {
  data: Recipe[];
  total: number;
  skip: number;
  limit: number;
  status: "success" | "fail";
  ok: boolean;
}

interface PostReponse {
  data: Post[];
  total: number;
  skip: number;
  limit: number;
  status: "success" | "fail";
  ok: boolean;
}

let a: RecipeResponse;
let b: PostReponse;

// Generic kullanarak kod tekrarını önleyelim
// Data'tipini generic olarak alma..
interface ApiResponse<T> {
  data: T[];
  total: number;
  skip: number;
  limit: number;
  status: "success" | "fail";
  ok: boolean;
}

let x: ApiResponse<Post>;
let y: ApiResponse<Recipe>;
