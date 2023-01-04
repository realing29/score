import { createSlice } from '@reduxjs/toolkit'

const commentSlice = createSlice({
	name: 'comment',
	initialState: {
		newComment: '',
		newRate: 0,
	},
	reducers: {
		newCommentChanged(state, action) {
			state.newComment = action.payload
		},
		newRateChanged(state, action) {
			state.newRate = action.payload
		},
	},
})

const { reducer: commentReducer, actions } = commentSlice

const { newCommentChanged, newRateChanged } = actions

export const newCommentChange = (payload) => (dispatch) => {
	dispatch(newCommentChanged(payload))
}

export const newRateChange = (payload) => (dispatch) => {
	if (payload >= 0 && payload <= 5) {
		dispatch(newRateChanged(payload))
	}
}

export const getNewComment = () => (state) => state.comment.newComment
export const getNewRate = () => (state) => state.comment.newRate

export default commentReducer
