import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getEndPoint } from '../utils/getEndPoint'
import { headersSetAuth } from '../utils/headersSetAuth'
const baseUrl = getEndPoint()

export const appApi = createApi({
	reducerPath: 'appApi',
	tagTypes: ['Products', 'Comments', 'UserApi'],
	baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: headersSetAuth }),
	endpoints: () => ({}),
})
