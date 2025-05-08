// Store ve persistor'ı dışa aktarma
export { store, persistor } from "./store";
export type { RootState, AppDispatch } from "./store";

// Hooks'ları dışa aktarma
export { useAppDispatch, useAppSelector } from "./hooks";

// Action'ları ve reducer'ları dışa aktarma
export { createNote, updateNote, deleteNote } from "./slices/notesSlice";
export { default as notesReducer } from "./slices/notesSlice";
