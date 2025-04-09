import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// asenkron thunk aksiyonu oluştur
// bu aksiyınu dispatch etitğimiz zaman otomatik olarak:
// api isteği atıldığı anda pending aksiyonu tetikler
// api isteği başarılı olursa fullfilled aksiyonu tetikler
// api istğei başarısız olursa rejected aksiyonu tetikler
export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // api istekleri at
  const res = await axios.get("https://dummyjson.com/users");

  // aksiyonun payload'ını return et
  return res.data;
});

const initialState = {
  isLoading: false,
  error: null,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  // senkron aksiyonları yönetmek için kullanırız
  reducers: {},
  // asenkron aksiyonları yönetmek istersek extraReducers kullanmak gerekir
  extraReducers: (builder) => {
    // getUsers thunk aksiyonun pending anında state nasıl güncellenir:
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    // getUsers thunk aksiyonun fulfilled anında state nasıl g..:
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload.users;
    });

    // getUsers thunk aksiyonun reject anında state nasıl g..:
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default updatedSlice.reducer;
