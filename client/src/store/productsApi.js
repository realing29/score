import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getEndPoint } from '../utils/getEndPoint'
import headersSetAuth from '../utils/headersSetAuth'
const baseUrl = getEndPoint()

getEndPoint()

export const productsApi = createApi({
	reducerPath: 'productsApi',
	tagTypes: ['Products', 'Comments'],
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: headersSetAuth,
	}),
	endpoints: (build) => ({
		getProductsList: build.query({
			query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Products', id })),
							{ type: 'Products', id: 'LIST' },
					  ]
					: [{ type: 'Products', id: 'LIST' }],
		}),
		getProduct: build.query({
			query: (id) => `products/${id}`,
			providesTags: () => {
				return [{ type: 'Products', id: 'LIST' }]
			},
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
