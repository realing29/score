import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'
const { jsonApiEndpoint, productionEndpoint, useJsonDB } = config
const baseUrl = useJsonDB ? jsonApiEndpoint : productionEndpoint

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
			providesTags: (result, error, arg) =>
				result
					? [
							{ type: 'Products', id: result._id },
							{ type: 'Products', id: 'LIST' },
					  ]
					: [{ type: 'Products', id: 'LIST' }],
		}),
		updateProduct: build.mutation({
			query: (body) => ({
				url: `products/${body._id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Products'],
		}),
		getProductsIds: build.query({
			query: (ids) => ({
				url: 'products/ids',
				method: 'POST',
				body: ids,
			}),
		}),
		updateProductRate: build.mutation({
			query: (body) => ({
				url: `products/rate/${body._id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Products'],
		}),
	}),
})

export const {
	useGetProductsListQuery,
	useGetProductQuery,
	useUpdateProductMutation,
	useGetProductsIdsQuery,
	useUpdateProductRateMutation,
} = productsApi
