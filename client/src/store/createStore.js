import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import { productsApi } from './productsApi'

const rootReducer = combineReducers({
	cart: cartReducer,
	[productsApi.reducerPath]: productsApi.reducer,
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productsApi.middleware),
	})
}
