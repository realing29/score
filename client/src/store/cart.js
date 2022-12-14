import { createSlice } from '@reduxjs/toolkit'
import localStorageService from '../services/localStorage.service'

const cartSlice = createSlice({
	name: 'cart',
	initialState: { entries: localStorageService.cartGetProducts() || {} },
	reducers: {
		cartAddedProduct(state, { payload }) {
			state.entries[payload] = { amount: 1 }
		},
		cartChangedProductAmount(state, { payload }) {
			const { id, val } = payload
			if (+val < 1) {
				delete state.entries[id]
			} else {
				state.entries[id].amount = val
			}
		},
		cartCleared(state) {
			state.entries = {}
		},
	},
})

const { reducer: cartReducer, actions } = cartSlice

const { cartAddedProduct, cartChangedProductAmount, cartCleared } = actions

export const addCart = (payload) => (dispatch, getState) => {
	dispatch(cartAddedProduct(payload))
	const cartProducts = getCartProducts()(getState())
	localStorageService.updateCart(cartProducts)
}

export const changeCartProductAmount = (payload) => (dispatch, getState) => {
	dispatch(cartChangedProductAmount(payload))
	const cartProducts = getCartProducts()(getState())

	localStorageService.updateCart(cartProducts)
}

export function getCartProducts() {
	return (state) => state.cart.entries
}

export const clearCart = () => (dispatch) => {
	dispatch(cartCleared())
	localStorageService.clearCart()
}

export default cartReducer
