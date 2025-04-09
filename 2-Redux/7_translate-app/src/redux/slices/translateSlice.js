import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  isLoading: false,
  sourceLang: { value: undefined, label: "Dili algıla" },
  targetLang: { value: "en", label: "English" },
  textToTranslate: "",
  translatedText: "",
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },

    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },

    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },

    swap: (state) => {
      // state'lerin şuanki değerlerini değişkene aktar
      const currentSource = state.sourceLang;
      const currentTarget = state.targetLang;
      const currentText = state.textToTranslate;
      const currentTranslated = state.translatedText;

      // state'leri değiştir
      state.sourceLang = currentTarget;
      state.targetLang = currentSource;
      state.textToTranslate = currentTranslated;
      state.translatedText = currentText;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.translatedText = "";
    });

    builder.addCase(translateText.rejected, (state) => {
      state.isLoading = false;
      alert("Çevirme işlemi başarısız");
    });

    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.translatedText = action.payload;
    });
  },
});

export const { setSource, setTarget, setText, swap } = translateSlice.actions;
export default translateSlice.reducer;
