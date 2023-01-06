import config from '../config.json'
import configV2 from '../configV2.json'

export const getEndPoint = () => {
	console.log(configV2)
	if (process.env.NODE_ENV === 'production') {
		if (configV2.ipAddress) {
			console.log(configV2.ipAddress)
			return `http://${configV2.ipAddress}/api/`
		} else {
			return config.productionEndpoint
		}
	} else return config.developmentEndpoint
}
