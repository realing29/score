import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

const getAccessToken = async () => {
	const expiresDate = localStorageService.getTokenExpiresDate()
	const refreshToken = localStorageService.getRefreshToken()
	const isExpired = refreshToken && expiresDate < Date.now()

	if (isExpired) {
		const data = await authService.refresh()
		localStorageService.setTokens(data)
	}
	return localStorageService.getAccessToken()
}

export const headersSetAuth = async (headers) => {
	const accessToken = await getAccessToken()

	if (accessToken) {
		headers.set('Authorization', `Bearer ${accessToken}`)
	}
	return headers
}
