import axios from 'axios'
import localStorageService from './localStorage.service'
import config from '../config.json'

const httpAuth = axios.create({
	baseURL: config.productionEndpoint + 'auth/',
})

const authService = {
	async register(payload) {
		const { data } = await httpAuth.post('signUp', payload)
		return data
	},
	async login({ login, password }) {
		const { data } = await httpAuth.post('signInWithPassword', {
			login,
			password,
		})
		return data
	},
	async refresh() {
		const { data } = await httpAuth.post('token', {
			grant_type: 'refresh_token',
			refresh_token: localStorageService.getRefreshToken(),
		})
		return data
	},
}

export default authService
