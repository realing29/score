import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'
const { jsonApiEndpoint, productionDBEndpoint } = config

const baseUrl =
	process.env.NODE_ENV === 'development' ? jsonApiEndpoint : productionDBEndpoint

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getProductsList: build.query({
			query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
		}),
		getProduct: build.query({
			query: (id) => `products/${id}`,
		}),
		updateProduct: build.mutation({
			query: (body) => ({
				url: `products/${body.id}`,
				method: 'PUT',
				body,
			}),
		}),
	}),
})

export const { useGetProductsListQuery, useGetProductQuery, useUpdateProductMutation } =
	productsApi
