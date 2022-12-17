import { createAction, createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

const initialState = localStorageService.getAccessToken()
	? {
			error: null,
			entity: localStorageService.getUser(),
	  }
	: {
			error: null,
			entity: {},
	  }

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		authRequestSuccess(state, action) {
			state.entity = action.payload
		},
		userDeleted(state, action) {
			state.entity = {}
		},
	},
})

const { reducer: userReducer, actions } = userSlice
const { authRequestSuccess, userDeleted } = actions

const authRequested = createAction('users/authRequested')

export const signUp = (payload) => async (dispatch) => {
	dispatch(authRequested())
	try {
		const data = await authService.register(payload)
		localStorageService.setTokens(data)
		localStorageService.setUser({ login: payload.login, userId: data.userId })
		dispatch(authRequestSuccess({ login: payload.login, userId: data.userId }))
	} catch (error) {
		throw error
	}
}

export const login = (payload) => async (dispatch) => {
	const { login, password } = payload
	dispatch(authRequested())
	try {
		const data = await authService.login({ login, password })
		localStorageService.setTokens(data)
		localStorageService.setUser({ login: payload.login, userId: data.userId })
		dispatch(authRequestSuccess({ login: payload.login, userId: data.userId }))
	} catch (error) {
		throw error
	}
}

export const logout = () => async (dispatch) => {
	dispatch(userDeleted())
	localStorageService.removeAuthData()
}

export const getUser = () => (state) => state.user.entity

export default userReducer
