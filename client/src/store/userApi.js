import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config.json'
import headersSetAuth from '../utils/headersSetAuth'
const { jsonApiEndpoint, productionEndpoint, useJsonDB } = config
const baseUrl = useJsonDB ? jsonApiEndpoint : productionEndpoint

export const userApi = createApi({
	reducerPath: 'userApi',
	tagTypes: ['userApi'],
	baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: headersSetAuth }),
	endpoints: (build) => ({
		getUserById: build.query({
			query: (id) => `user/${id}`,
		}),
		updateUser: build.mutation({
			query: (body) => ({
				url: `user/${body._id}`,
				method: 'PUT',
				body,
			}),
		}),
	}),
})

export const { useGetUserByIdQuery, useUpdateUserMutation } = userApi
