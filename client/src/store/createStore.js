import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import commentReducer from './comments'
import { productsApi } from './productsApi'
import { commentsApi } from './commentsApi'
import userReducer from './user'

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	comment: commentReducer,
	[commentsApi.reducerPath]: commentsApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productsApi.middleware, commentsApi.middleware),
	})
}
