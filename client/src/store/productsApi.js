import { appApi } from './appApi'
import { createEntityAdapter } from '@reduxjs/toolkit'

const productsAdapter = createEntityAdapter({ selectId: (product) => product._id })

const initialState = productsAdapter.getInitialState()

const productsApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		getProductsList: build.query({
			query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
			transformResponse: (responseData) => {
				return productsAdapter.setAll(initialState, responseData)
			},
			providesTags: ({ ids = [] }) => [
				'Products',
				...ids.map((id) => {
					return { type: 'Products', id: id }
				}),
			],
		}),
		getProduct: build.query({
			query: (id) => `products/${id}`,
			providesTags: (_result, _error, arg) => {
				return [{ type: 'Products', id: arg }]
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

export default productsApi
