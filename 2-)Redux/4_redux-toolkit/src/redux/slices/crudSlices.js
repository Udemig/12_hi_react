import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTask } from "../../constants/constants";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTask },
  reducers: {
    // Task ekle
    addTask: (state, action) => {
      // Gelen action içerisindeki payload a bir id değeri ekle
      action.payload.id = v4();

      // Task dizisine gelen action içerisindeki payloadı ekle
      state.tasks.push(action.payload);
    },
    // Task sil
    deleteTask: (state, action) => {
      // ! Task'ı filter ile diziden kaldırma
      //       const filtred = state.tasks.filter((i) => i.id != action.payload);

      //       state.tasks = filtred;

      // ! Task'ı splice ile diziden kaldırma

      // silinecek elemanın dizideki sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);

      // sırası bilinen elemanı diziden kaldır
      state.tasks.splice(index, 1);
    },
    // Taskı güncelle
    updateTask: (state, action) => {
      // Güncellenecek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);
      // Sırası bulunan elemanı dizi içerisinde güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

// Aksiyonlar

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

// Reducer

export default taskSlice.reducer;
