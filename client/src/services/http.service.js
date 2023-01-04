import axios from 'axios'
import { headersSetAuth } from '../utils/headersSetAuth'
import { getEndPoint } from './../utils/getEndPoint'

export const httpService = axios.create({
	baseURL: getEndPoint(),
})

httpService.interceptors.request.use(async (config) => {
	const headers = await headersSetAuth(config.headers)
	return { ...config, headers }
})
