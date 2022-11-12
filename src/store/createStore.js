import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import productsReducer from './products'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
})

export default function createStore() {
  return configureStore({
    reducer: rootReducer,
  })
}
