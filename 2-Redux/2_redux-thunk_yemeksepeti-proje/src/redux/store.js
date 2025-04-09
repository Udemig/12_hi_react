import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducers from "./reducers/restaurantReducers";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

// combineReducers ile reducer'ları bir root reducer'a çevir
const rootReducer = combineReducers({ restaurantReducers, cartReducer });

// createStore ile store oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
