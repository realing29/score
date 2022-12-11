import { createAction, createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
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
	},
})

const { reducer: userReducer, actions } = userSlice
const { authRequestSuccess } = actions

const authRequested = createAction('users/authRequested')

export const signUp = (payload) => async (dispatch) => {
	dispatch(authRequested())
	try {
		const data = await authService.register(payload)
		localStorageService.setTokens(data)
		localStorageService.setUser({ email: payload.email })
		dispatch(authRequestSuccess({ email: payload.email }))
	} catch (error) {
		console.error(error)
	}
}

export const login = (payload) => async (dispatch) => {
	const { email, password } = payload
	dispatch(authRequested())
	try {
		const data = await authService.login({ email, password })
		localStorageService.setTokens(data)
		localStorageService.setUser({ email: payload.email })
		dispatch(authRequestSuccess({ email: payload.email }))
	} catch (error) {
		console.error(error)
	}
}

export const logout = () => async (dispatch) => {
	dispatch(authRequested())
	try {
		const navigate = useNavigate()
		localStorageService.removeAuthData()
		navigate('/')
	} catch (error) {
		console.error(error)
	}
}

export const getUser = () => (state) => state.user.entity

export default userReducer
