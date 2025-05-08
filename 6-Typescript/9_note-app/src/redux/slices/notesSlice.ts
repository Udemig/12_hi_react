import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { Note, NotesState } from "../../types";

// Başlangıç state'i
const initialState: NotesState = {
  notes: [],
};

// Notes slice
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // Yeni not ekleme
    createNote: {
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },
      prepare: (title: string, content: string, tags: string[] = []) => {
        return {
          payload: {
            id: uuidv4(),
            title,
            content,
            tags,
          },
        };
      },
    },

    // Not güncelleme
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },

    // Not silme
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators dışa aktarılıyor
export const { createNote, updateNote, deleteNote } = notesSlice.actions;

// Reducer dışa aktarılıyor
export default notesSlice.reducer;
