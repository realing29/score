import { createSlice } from '@reduxjs/toolkit'
import API from '../api'

const productsSlice = createSlice({
  name: 'product',
  initialState: {
    entities: [],
    isLoad: false,
    error: null,
  },
  reducers: {
    productsRequested(state) {
      state.isLoad = false
    },
    productsReceived(state, actions) {
      state.entities = actions.payload
      state.isLoad = true
    },
    productsRequestFailed(state, actions) {
      state.isLoad = true
      state.error = actions.payload
    },
  },
})

const { reducer: productsReducer, actions } = productsSlice

const { productsRequested, productsReceived, productsRequestFailed } = actions

export const loadProducts = () => async (dispatch) => {
  dispatch(productsRequested())
  try {
    const products = await API.products.fetchAll()
    dispatch(productsReceived(products))
  } catch (error) {
    dispatch(productsRequestFailed(error.message))
  }
}

export const getProducts = () => (state) => state.products.entities

export const getProductsLoadStatus = () => (state) => state.products.isLoad

export default productsReducer
