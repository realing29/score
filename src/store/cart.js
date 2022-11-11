const { createSlice } = require("@reduxjs/toolkit")
const lStorage = require("../services/localStorage.service")

const cartSlice = createSlice({
  name: "cart",
  initialState: { entries: lStorage.cartGetProducts() },
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
  },
})

const { reducer: cartReducer, actions } = cartSlice

const { cartAddedProduct, cartChangedProductAmount } = actions

export const addCart = (payload) => (dispatch, getState) => {
  dispatch(cartAddedProduct(payload))
  const cartProducts = getCartProducts()(getState())
  lStorage.updateCart(cartProducts)
}

export const changeCartProductAmount = (payload) => (dispatch, getState) => {
  dispatch(cartChangedProductAmount(payload))
  const cartProducts = getCartProducts()(getState())

  lStorage.updateCart(cartProducts)
}

export function getCartProducts() {
  return (state) => state.cart.entries
}

export default cartReducer
