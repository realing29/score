import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../api'
import { delay } from '../utils/delay'
import { getRandomIntInclusive } from '../utils/getRandom'

export const fetchProductsAsync = createAsyncThunk(
	'products/fetchAll',
	async (payload, thunkApi) => {
		try {
			await delay(getRandomIntInclusive(100, 500, 0))
			return await API.products.fetchAll()
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	},
)

const productsSlice = createSlice({
	name: 'product',
	initialState: {
		entities: [],
		loadStatus: 'loading',
		error: null,
	},
	extraReducers: {
		[fetchProductsAsync.pending.type]: (state) => {
			state.loadStatus = 'loading'
		},
		[fetchProductsAsync.fulfilled.type]: (state, { payload }) => {
			state.entities = payload
			state.loadStatus = 'loaded'
		},
		[fetchProductsAsync.rejected.type]: (state, { payload }) => {
			state.loadStatus = 'error'
			state.error = payload
		},
	},
})

const { reducer: productsReducer } = productsSlice

export const getProducts = () => (state) => state.products.entities

export const getProductsLoadStatus = () => (state) => state.products.loadStatus

export default productsReducer
