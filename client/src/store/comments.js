import { createSlice } from '@reduxjs/toolkit'

const commentSlice = createSlice({
	name: 'comment',
	initialState: {
		newComment: '',
		newRate: 0,
	},
	reducers: {
		newCommentChanged(state, aciton) {
			state.newComment = aciton.payload
		},
		newRateChanged(state, aciton) {
			state.newRate = aciton.payload
		},
	},
})

const { reducer: commentReducer, actions } = commentSlice

const { newCommentChanged, newRateChanged } = actions

export const newCommentChange = (payload) => (dispatch, getstate) => {
	dispatch(newCommentChanged(payload))
}

export const newRateChange = (payload) => (dispatch, getstate) => {
	if (payload >= 0 && payload <= 5) {
		dispatch(newRateChanged(payload))
	}
}

export const getNewComment = () => (state) => state.comment.newComment
export const getNewRate = () => (state) => state.comment.newRate

export default commentReducer
