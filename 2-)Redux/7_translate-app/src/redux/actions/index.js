import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  // api istğeini at
  const res = await api.get("/languages");

  // payload'ı return et
  return res.data.languages;
});

// thunk aksiyonları 2 parametre alır
// 1: bizim gönderidğimiz parametreler
// 2: redux'ın gönderidiği parametreler
export const translateText = createAsyncThunk("translate/translateText", async (_, { getState }) => {
  // aksiyon içerisinde store'daki verilere erişmemizi sağlayan fonksiyon
  const { translate } = getState();

  // api isteği at
  const res = await api.post("", {
    q: translate.textToTranslate,
    source: translate.sourceLang.value,
    target: translate.targetLang.value,
  });

  // payload'ı return et
  return res.data.data.translations.translatedText[0];
});
