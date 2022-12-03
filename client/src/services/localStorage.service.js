const CART_PRODUCTS = 'cart-product'

const getItem = (key) => JSON.parse(localStorage.getItem(key))
const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export const updateCart = (products) => {
	setItem(CART_PRODUCTS, products)
}

export const cartGetProducts = () => getItem(CART_PRODUCTS)

export default { updateCart, cartGetProducts }
