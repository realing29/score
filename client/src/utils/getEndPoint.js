import config from '../config.json'

export const getEndPoint = () => {
	if (process.env.NODE_ENV === 'production') return config.productionEndpoint
	else return config.developmentEndpoint
}
