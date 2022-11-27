import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'
const { jsonApiEndpoint, productionDBEndpoint } = config

const baseUrl =
	process.env.NODE_ENV === 'development' ? jsonApiEndpoint : productionDBEndpoint

export const productsApi = createApi({
	reducerPath: 'productsApi',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getProductsList: build.query({
			query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
			providesTags: (result, error, arg) =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Products', id })),
							{ type: 'Products', id: 'LIST' },
					  ]
					: [{ type: 'Products', id: 'LIST' }],
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
			invalidatesTags: ['Products'],
		}),
	}),
})

export const { useGetProductsListQuery, useGetProductQuery, useUpdateProductMutation } =
	productsApi
