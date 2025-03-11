import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlices";
import taskReducer from "./slices/crudSlices";

const store = configureStore({
  reducer: {
    counterReducer,
    taskReducer,
  },
});

export default store;
