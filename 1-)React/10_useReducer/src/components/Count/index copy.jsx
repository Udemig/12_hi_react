import React, { useReducer } from "react";

const CountBasics = () => {
  /*
    * useReducer hook'u kullanılırken bu hook bizden bazı değerler ister:
  
  1-) reducer function: State'in nasıl değişeceğine karar veren fonksiyon.
  2-) initialState: State'in başlangıç değeri.


  * useReducer hook'u bizden istediği reducer function ve initialState karşılığında bize:

  1-) state:

  2-) dispatch: Aksiyonları reducer'a aktaran metotdur.
              
              
 */
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "Arttır":
        return state + 1;
      case "Azalt":
        return state - 1;
      case "Sıfırla":
        return 0;
    }
  }, 0);
  return (
    <div className=" h-screen text-center d-flex flex-column">
      <h1>Count</h1>

      <span className="fs-1">Sayaç:{count} </span>
      <div className="d-flex gap-3 justify-content-center mt-4">
        <button onClick={() => dispatch("Sıfırla")}>Sıfırla</button>
        <button onClick={() => dispatch("Arttır")}>Arttır</button>
        <button onClick={() => dispatch("Azalt")}>Azalt</button>
      </div>
    </div>
  );
};

export default CountBasics;
