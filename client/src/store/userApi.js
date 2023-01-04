import { appApi } from './appApi'

const userApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		getUserById: build.query({
			query: (id) => `user/${id}`,
			providesTags: () => [{ type: 'UserApi', id: 'LIST' }],
		}),
		updateUser: build.mutation({
			query: (body) => ({
				url: `user/${body._id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: () => [{ type: 'UserApi', id: 'LIST' }],
		}),
	}),
})

export const { useGetUserByIdQuery, useUpdateUserMutation } = userApi

export default userApi
