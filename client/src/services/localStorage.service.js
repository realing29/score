const CART_PRODUCTS = 'cart-product'
const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
const USER = 'user'

const getItem = (key) => JSON.parse(localStorage.getItem(key))
const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export const updateCart = (products) => {
	setItem(CART_PRODUCTS, products)
}

export const cartGetProducts = () => getItem(CART_PRODUCTS)

export function setTokens({ refreshToken, accessToken, userId, expiresIn = 3600 }) {
	const expiresDate = new Date().getTime() + expiresIn * 1000
	localStorage.setItem(USERID_KEY, userId)
	localStorage.setItem(TOKEN_KEY, accessToken)
	localStorage.setItem(REFRESH_KEY, refreshToken)
	localStorage.setItem(EXPIRES_KEY, expiresDate)
}
export function getAccessToken() {
	return localStorage.getItem(TOKEN_KEY)
}
export function getRefreshToken() {
	return localStorage.getItem(REFRESH_KEY)
}
export function removeAuthData() {
	localStorage.removeItem(USERID_KEY)
	localStorage.removeItem(TOKEN_KEY)
	localStorage.removeItem(REFRESH_KEY)
	localStorage.removeItem(EXPIRES_KEY)
	localStorage.removeItem(USER)
}

export function getTokenExpiresDate() {
	return localStorage.getItem(EXPIRES_KEY)
}
export function getUserId() {
	return localStorage.getItem(USERID_KEY)
}

export const setUser = (payload) => setItem(USER, payload)
export const getUser = () => getItem(USER)

export default {
	updateCart,
	cartGetProducts,
	setTokens,
	getAccessToken,
	getRefreshToken,
	getTokenExpiresDate,
	getUserId,
	removeAuthData,
	getUser,
	setUser,
}
