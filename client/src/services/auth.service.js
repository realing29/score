import axios from 'axios'
import localStorageService from './localStorage.service'
import { getEndPoint } from '../utils/getEndPoint'

const httpAuth = axios.create({
	baseURL: getEndPoint() + 'auth/',
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
