import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import commentReducer from './comments'
import userReducer from './user'
import filterReducer from './filter'
import { appApi } from './appApi'

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	comment: commentReducer,
	filter: filterReducer,
	[appApi.reducerPath]: appApi.reducer,
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(appApi.middleware),
	})
}
