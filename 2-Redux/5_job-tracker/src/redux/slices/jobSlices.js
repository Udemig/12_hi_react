import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    // Yüklenme durumu
    setLoading: (state) => {
      state.isLoading = true;
    },

    // Hata durumu
    setError: (state, action) => {
      // Yüklenme state'ini güncelle
      state.isLoading = false;
      // Gelen hata mesajını state içerisindeki error'a aktar
      state.error = action.payload.message;
    },

    // Api'dan iş verisini al ve reducer'a ilet
    setJobs: (state, action) => {
      // Yüklenme state'ini güncelle
      state.isLoading = false;
      // Hata state'ini null'a çek
      state.error = null;
      // Gelen iş verisini state içerisindeki jobs'a aktar
      state.jobs = action.payload;
    },

    // Yeni iş ekle
    createJob: (state, action) => {
      // action içerisinde gelen payload değerini state içerisindeki jobs dizisine aktar
      state.jobs.push(action.payload);
    },

    // İş sil
    deleteJob: (state, action) => {
      //  deleteJob'a gelen id' ile silinecek veriyi state içerisinden bul ve state'den kaldır

      // Silinecek elemanın sırasını state içerisinden bul
      const index = state.jobs.findIndex((i) => i.id == action.payload);

      // Sırası bilinen elemanı state'den kaldır
      state.jobs.splice(index, 1);
    },
  },
});

// Aksiyonlar

export const { setLoading, setError, setJobs, createJob, deleteJob } = jobSlice.actions;

// Reducer

export default jobSlice.reducer;
