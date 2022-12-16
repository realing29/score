import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
	getPageNumber,
	getSearch,
	pageNumberChange,
	searchChange,
} from '../../../store/filter'
import style from './search.module.sass'

const Search = () => {
	const dispatch = useDispatch()
	const search = useSelector(getSearch())
	const navigate = useNavigate()
	const location = useLocation()
	const pageNumber = useSelector(getPageNumber())

	const handleChange = (e) => {
		if (location.pathname !== '/') {
			navigate('/')
		}
		if (pageNumber !== 1) {
			dispatch(pageNumberChange(1))
		}

		dispatch(searchChange(e.target.value))
	}
	return (
		<div className={style.search_product}>
			<input
				className={style.search_product__input}
				type='text'
				value={search}
				placeholder='Поиск товаров'
				onChange={handleChange}
			/>
		</div>
	)
}

Search.propTypes = {
	handleSearch: PropTypes.func,
	search: PropTypes.string,
}

export default Search
