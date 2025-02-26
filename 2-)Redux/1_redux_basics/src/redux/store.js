import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// combineReducers ile projedeki reducerleri birleştirip bir tane rootReducer elde ederiz.
const rootReducer = combineReducers({ todoReducer, userReducer });

// Oluşturulan rootReducer'ı store oluşturan metot olan createStore verip store yapısı oluştururuz.
const store = createStore(rootReducer);

export default store;
