import axios from 'axios'
import localStorageService from './localStorage.service'
import config from '../config.json'

const httpAuth = axios.create({
	baseURL: config.productionEndpoint + 'auth/',
})

const authService = {
	async register(payload) {
		console.log(payload)
		const { data } = await httpAuth.post('signUp', payload)
		console.log(data)
		return data
	},
	async login({ email, password }) {
		const { data } = await httpAuth.post('signInWithPassword', {
			email,
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
