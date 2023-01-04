import { appApi } from './appApi'

const commentsApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		getCommentList: build.query({
			query: (productId = '') => `comments/${productId}`,
			providesTags: (result = []) => [
				'Comments',
				...result.map(({ _id }) => ({ type: 'Comments', id: _id })),
			],
		}),
		addComment: build.mutation({
			query: (body) => ({
				url: 'comments',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Comments'],
		}),
		deleteComment: build.mutation({
			query: (comment) => ({
				url: `comments/${comment._id}`,
				method: 'delete',
			}),
			invalidatesTags: (_result, _error, arg) => [
				'Comments',
				{ type: 'Products', id: arg.productId },
			],
		}),
	}),
})

export const { useGetCommentListQuery, useAddCommentMutation, useDeleteCommentMutation } =
	commentsApi

export default commentsApi
