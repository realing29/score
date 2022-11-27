import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import style from './search.module.sass'

const Search = ({ handleSearch, search }) => {
	const navigate = useNavigate()
	const location = useLocation()

	const handleChange = (e) => {
		if (location.pathname !== '/') {
			navigate('/')
		}
		handleSearch(e.target.value)
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
