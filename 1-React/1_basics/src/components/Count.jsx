import { useState } from "react";
const Count = () => {
  // State Kurulumu:
  // 1-) React içerisinden useState import edilir.
  // 2-) useState() yapısı bir diziye atanır.
  // 3-) Bu dizi bizden birinci değer olarak state'ın adını ikinci değer olaraksa bu state'i güncelleyecek metodu talep eder.
  // 4-) State'in başlangıç değeri useState() kısmındaki () içerisinde yazılır.
  const [count, setCount] = useState(0);

  return (
    <div className="w-100 h-100 bg-secondary pt-3">
      <div className="d-flex flex-column gap-3 text-center">
        <h1>Count</h1>
        <h1>{count} </h1>
        <div>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-success mx-4"
          >
            Arttır
          </button>
          <button
            disabled={true}
            onClick={() => setCount(count - 1)}
            className="btn btn-danger mx-4"
          >
            Azalt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
