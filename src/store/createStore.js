import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
