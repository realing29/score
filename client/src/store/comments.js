import { createSlice } from '@reduxjs/toolkit'
import { useUpdateProductMutation } from './productsApi'
import { getUser } from './user'

const commentSlice = createSlice({
	name: 'comment',
	initialState: {
		newComment: '',
		newRate: 0,
		errors: { rate: 'оценка должна быть от 1 до 5' },
	},
	reducers: {
		newCommentChanged(state, aciton) {
			state.newComment = aciton.payload
		},
		newRateChanged(state, aciton) {
			state.newRate = aciton.payload
		},
		errorRateClear(state) {
			delete state.errors.rate
		},
	},
})

const { reducer: commentReducer, actions } = commentSlice

const { newCommentChanged, newRateChanged, errorRateClear } = actions

export const newCommentChange = (payload) => (dispatch, getstate) => {
	dispatch(newCommentChanged(payload))
}

export const newRateChange = (payload) => (dispatch, getstate) => {
	if (payload >= 1 && payload <= 5) {
		dispatch(errorRateClear())
		dispatch(newRateChanged(payload))
	}
}

export const getNewComment = () => (state) => state.comment.newComment
export const getNewRate = () => (state) => state.comment.newRate
export const getErrors = () => (state) => state.comment.errors

export default commentReducer
