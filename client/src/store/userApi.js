import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getEndPoint } from '../utils/getEndPoint'
import headersSetAuth from '../utils/headersSetAuth'
const baseUrl = getEndPoint()

export const userApi = createApi({
	reducerPath: 'userApi',
	tagTypes: ['userApi'],
	baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: headersSetAuth }),
	endpoints: (build) => ({
		getUserById: build.query({
			query: (id) => `user/${id}`,
			providesTags: (result, error, arg) => {
				return [{ type: 'userApi', id: 'LIST' }]
			},
		}),
		updateUser: build.mutation({
			query: (body) => ({
				url: `user/${body._id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['userApi'],
		}),
	}),
})

export const { useGetUserByIdQuery, useUpdateUserMutation } = userApi
