import axios from 'axios'
import config from '../config.json'
import { getEndPoint } from '../utils/getEndPoint'

const baseURL = getEndPoint()

export default function createEndpointFetcher(endpoint) {
	return axios.create({
		baseURL: baseURL + endpoint,
	})
}
