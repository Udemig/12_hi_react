import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage için
import notesReducer from "./slices/notesSlice";

// Root reducer
const rootReducer = combineReducers({
  notes: notesReducer,
});

// Redux Persist yapılandırması
const persistConfig = {
  key: "root", // localStorage'da saklanan verinin anahtarı
  storage, // localStorage kullanıyoruz
  whitelist: ["notes"], // Hangi reducer'ların kalıcı olacağını belirtiyoruz
};

// Persist reducer oluşturuluyor
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store oluşturuluyor
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux Persist action'larını serializableCheck dışında tutuyoruz
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor oluşturuluyor
export const persistor = persistStore(store);

// RootState tipi
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch tipi
export type AppDispatch = typeof store.dispatch;
