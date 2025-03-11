/*
* Slice ile hem action'ları hem action type'larını hemde reducer'ı tek bir yerde oluşturacağız.

Slice oluşturmak için `createSlice` import edilir.createSlice içerisine bir obje içerisinde name,initialState,reducers oluşturulur.

name: Slice a verilen bir isim.(String)

initialState: State'in başlangıç değeri

reducers: Aksiyonların görevinin tanımlandığı kısım

*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: false, name: "Esra" },
  reducers: {
    increase: (state) => {
      // Redux Toolkit ile direkt olarak state içerisindeki değere erişip bunu güncelleyebiliriz.Bu sayede uzun uzun {...state,vs } yazmamıza gerek kalmıyor.
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Aksiyonlar
export const { increase, decrease, reset, setCount } = counterSlice.actions;

// Reducer

export default counterSlice.reducer;
