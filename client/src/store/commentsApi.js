import { productsApi } from './productsApi'

export const commentsApi = productsApi.injectEndpoints({
	endpoints: (build) => ({
		getCommentList: build.query({
			query: (productId = '') => `comments/${productId}`,
			providesTags: (result, error, arg) =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Comments', id })),
							{ type: 'Comments', id: 'LIST' },
					  ]
					: [{ type: 'Comments', id: 'LIST' }],
		}),
		addComment: build.mutation({
			query: (body) => ({
				url: 'comments',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
		}),
		delteComment: build.mutation({
			query: (id) => ({
				url: `comments/${id}`,
				method: 'delete',
			}),
			invalidatesTags: [
				{ type: 'Comments', id: 'LIST' },
				{ type: 'Products', id: 'LIST' },
			],
		}),
	}),
})

export const { useGetCommentListQuery, useAddCommentMutation, useDelteCommentMutation } =
	commentsApi
