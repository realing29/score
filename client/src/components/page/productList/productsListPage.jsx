import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import { useGetProductsListQuery } from '../../../store/productsApi'
import Product from '../../ui/product/product'
import ProductLoader from '../../ui/product/productLoader/productLoader'
import Filters from './filters'
import style from './product.module.sass'

const ProductsPage = ({ search }) => {
	const cart = useSelector(getCartProducts())
	const { data = [], isLoading, isSuccess, isError } = useGetProductsListQuery()

	// поиск по названию
	let dataFiltered = search
		? data.filter((item) => {
				return new RegExp(search).test(item.name)
		  })
		: data

	// фильтр по категории
	const [filter, setFilter] = useState({
		category: {
			инструменты: false,
			'для уборки': false,
			'для кухни': false,
			другое: false,
		},
		sort: 'сначала популярные',
	})

	let useCategory = Object.entries(filter.category).reduce((acc, [key, val]) => {
		if (val) {
			acc.push(key)
		}
		return acc
	}, [])

	if (useCategory.length) {
		dataFiltered = dataFiltered.filter((item) => {
			for (const category of useCategory) {
				if (item.category === category) return true
			}
			return false
		})
	}

	// сортировка
	if (filter.sort === 'сначала не дорогие') {
		dataFiltered = [...dataFiltered].sort((a, b) => +a.price - +b.price)
	}
	if (filter.sort === 'сначала дорогие') {
		dataFiltered = [...dataFiltered].sort((a, b) => +b.price - +a.price)
	}
	if (filter.sort === 'сначала популярные') {
		dataFiltered = [...dataFiltered].sort((a, b) => +b.rate.value - +a.rate.value)
	}

	return (
		<div className={style.products_page_block}>
			<Filters className={style.filters} filter={filter} setFilter={setFilter} />
			<div className={style.product_container}>
				{isLoading && new Array(10).fill(0).map((item, i) => <ProductLoader key={i} />)}
				{isSuccess &&
					dataFiltered.map((item) => (
						<Product {...item} key={item._id} isInCart={Boolean(cart[item._id])} />
					))}
				{isError && 'Произошла ошибка при загрузке товаров'}
			</div>
		</div>
	)
}

ProductsPage.propTypes = {
	search: PropTypes.string,
}

export default ProductsPage
