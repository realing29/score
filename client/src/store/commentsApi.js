import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'
const { jsonApiEndpoint, productionEndpoint, useJsonDB } = config

const baseUrl = process.env.NODE_ENV === useJsonDB ? jsonApiEndpoint : productionEndpoint

export const commentsApi = createApi({
	reducerPath: 'commentsApi',
	tagTypes: ['Comments'],
	baseQuery: fetchBaseQuery({ baseUrl }),
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
	}),
})

export const { useGetCommentListQuery, useAddCommentMutation } = commentsApi
