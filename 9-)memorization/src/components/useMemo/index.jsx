import { useState, useMemo } from "react";

const UseMemo = () => {
  /* 

   Bileşen her render olduğunda bileşen içerisindeki stateler fonksiyonlar tekrar çalışır.Bu bizim için gereksiz renderlama ve performans sorunu demektir.

   useMemo hook'u ile bu sorunu çözebiliriz. useMemo hook'u ile bir değeri hafızada tutabilir ve bu değer değişmediği sürece bu değeri tekrar tekrar hesaplamak yerine hafızada tutulan değeri kullanabiliriz.


*/
  const [count, setCount] = useState(0);

  const newArray = useMemo(() => {
    const array = new Array(100000).fill("Hello World");

    return array.map((item) => item + " Udemig Akademiden Selamlar");
  }, []);

  console.log(newArray);

  return (
    <div className="container mt-5">
      <h1>useMemo</h1>

      <div className="mt-4">
        <button onClick={() => setCount(count + 1)}>
          Arttır (Sayaç: {count})
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
