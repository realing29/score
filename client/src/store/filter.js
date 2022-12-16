import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		search: '',
		category: {
			инструменты: false,
			'для уборки': false,
			'для кухни': false,
			другое: false,
		},
		sort: 'сначала популярные',
		countOnPage: 5,
		pageNumber: 1,
	},
	reducers: {
		searchChanged(state, { payload }) {
			state.search = payload
		},
		pageNumberChanged(state, { payload }) {
			state.pageNumber = payload
		},
		categoryChanged(state, { payload }) {
			const { value, checked } = payload
			state.category[value] = checked
		},
		sortChanged(state, { payload }) {
			state.sort = payload
		},
		countOnPageChanged(state, { payload }) {
			state.countOnPage = payload.value
		},
	},
})

const { reducer: filterReducer, actions } = filterSlice
const {
	searchChanged,
	pageNumberChanged,
	categoryChanged,
	sortChanged,
	countOnPageChanged,
} = actions

export const searchChange = (payload) => async (dispatch) => {
	dispatch(searchChanged(payload))
}
export const pageNumberChange = (payload) => async (dispatch) => {
	dispatch(pageNumberChanged(payload))
}
export const categoryChange = (payload) => async (dispatch) => {
	dispatch(categoryChanged(payload))
}
export const sortChange = (payload) => async (dispatch) => {
	dispatch(sortChanged(payload))
}

export const countOnPageChange = (payload) => async (dispatch) => {
	dispatch(countOnPageChanged(payload))
}

export const getCategory = () => (state) => state.filter.category
export const getSearch = () => (state) => state.filter.search
export const getSort = () => (state) => state.filter.sort
export const getCountOnPage = () => (state) => state.filter.countOnPage
export const getPageNumber = () => (state) => state.filter.pageNumber

export default filterReducer
