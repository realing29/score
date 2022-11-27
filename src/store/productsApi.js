import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'
const { jsonApiEndpoint, productionDBEndpoint } = config

const baseUrl =
	process.env.NODE_ENV === 'development' ? jsonApiEndpoint : productionDBEndpoint

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getProducts: build.query({
			query: () => ({ url: 'products' }),
		}),
	}),
})

export const { useGetProductsQuery } = productsApi
