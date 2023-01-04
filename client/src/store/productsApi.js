import { appApi } from './appApi'

const productsApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		getProductsList: build.query({
			query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
			providesTags: (result = []) => [
				'Products',
				...result.map(({ _id }) => {
					return { type: 'Products', id: _id }
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
