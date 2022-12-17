import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

const headersSetAuth = async (headers) => {
	const expiresDate = localStorageService.getTokenExpiresDate()
	const refreshToken = localStorageService.getRefreshToken()
	const isExpired = refreshToken && expiresDate < Date.now()

	if (isExpired) {
		const data = await authService.refresh()
		localStorageService.setTokens(data)
	}
	const accessToken = localStorageService.getAccessToken()

	if (accessToken) {
		headers.set('Authorization', `Bearer ${accessToken}`)
	}
	return headers
}

export default headersSetAuth
