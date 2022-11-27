import axios from 'axios'
import config from '../config.json'

const { jsonApiEndpoint, useJsonDB, productionDBEndpoint } = config

const baseURL = useJsonDB ? jsonApiEndpoint : productionDBEndpoint

export default function createEndpointFetcher(endpoint) {
	return axios.create({
		baseURL: baseURL + endpoint,
	})
}
