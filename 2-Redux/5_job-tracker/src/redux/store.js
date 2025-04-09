import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlices";

const store = configureStore({ reducer: { jobReducer } });

export default store;
