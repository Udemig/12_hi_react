import { useCallback, useState } from "react";
import Example from "../Example";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(null);

  const giveAlert = useCallback(() => {
    // useCallback ile prop geçildiğinde gereksiz renderlama ortadana kaldırıldı
    alert(`Udemig akademiden selamlar`);
  }, []);

  return (
    <div className="container mt-5 p-2">
      <h1>UseCallBack</h1>
      <div className="d-flex gap-5 mt-3">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary btn-lg px-4 fs-3"
        >
          Arttır
        </button>
      </div>

      <Example count={count} giveAlert={giveAlert} />
    </div>
  );
};

export default UseCallBack;

/*

- React.memo ile sarmalanan bir elemana string,number,boolean
veri tipinde prop geçildiğinde herhangi bir sıkıntı olmaz.Ama
dizi,obje geçildiğinde ise tekrardan render edilir.

*/
