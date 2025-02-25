// Reducer function action'a göre state'in güncel haline karar verir.
const counterReducer = (state, action) => {
  switch (action) {
    case "Arttır":
      return state + 1;
    case "Azalt":
      return state - 1;
    case "Sıfırla":
      return 0;
  }
};

export default counterReducer;
