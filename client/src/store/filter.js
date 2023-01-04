import { createSlice } from '@reduxjs/toolkit'
import { httpService } from '../services/http.service'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		search: '',
		categoryV2: {},
		isErrorLoadCategory: false,
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
		sortChanged(state, { payload }) {
			state.sort = payload
		},
		countOnPageChanged(state, { payload }) {
			state.countOnPage = payload.value
		},

		categoryV2Updated(state, { payload }) {
			state.categoryV2 = payload
		},
		isErrorLoadCategoryChanged(state, { payload }) {
			state.isErrorLoadCategory = payload
		},
		categoryV2Checked(state, { payload }) {
			const { id, checked } = payload
			state.categoryV2[id].checked = checked
		},
	},
})

const { reducer: filterReducer, actions } = filterSlice
const {
	searchChanged,
	pageNumberChanged,
	sortChanged,
	countOnPageChanged,
	categoryV2Updated,
	isErrorLoadCategoryChanged,
	categoryV2Checked,
} = actions

export const searchChange = (payload) => async (dispatch) => {
	dispatch(searchChanged(payload))
}
export const pageNumberChange = (payload) => async (dispatch) => {
	dispatch(pageNumberChanged(payload))
}
export const sortChange = (payload) => async (dispatch) => {
	dispatch(sortChanged(payload))
}

export const countOnPageChange = (payload) => async (dispatch) => {
	dispatch(countOnPageChanged(payload))
}

export const categoryV2Update = () => async (dispatch) => {
	try {
		const { data } = await httpService.get('/category')
		const categories = data.reduce((acc, category) => {
			acc[category._id] = { ...category, checked: false }
			return acc
		}, {})

		dispatch(categoryV2Updated(categories))
	} catch (error) {
		dispatch(isErrorLoadCategoryChanged(true))
	}
}

export const categoryV2Check = (payload) => async (dispatch) => {
	dispatch(categoryV2Checked(payload))
}

export const getSearch = () => (state) => state.filter.search
export const getSort = () => (state) => state.filter.sort
export const getCountOnPage = () => (state) => state.filter.countOnPage
export const getPageNumber = () => (state) => state.filter.pageNumber
export const getCategoryV2 = () => (state) => state.filter.categoryV2
export const getIsErrorLoadCategory = () => (state) => state.filter.isErrorLoadCategory

export default filterReducer
