import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import {
	getCategory,
	getCountOnPage,
	getPageNumber,
	getSearch,
	getSort,
	pageNumberChange,
} from '../../../store/filter'
import { useGetProductsListQuery } from '../../../store/productsApi'
import { paginate } from '../../../utils/paginate'
import Error from '../../common/error'
import Pagination from '../../common/pagination'
import Product from '../../ui/product/product'
import ProductLoader from '../../ui/product/productLoader/productLoader'
import Filters from './filters'
import style from './product.module.sass'

const ProductsPage = () => {
	const dispatch = useDispatch()

	const cart = useSelector(getCartProducts())
	const { data = [], isLoading, isSuccess, isError } = useGetProductsListQuery()

	// поиск по названию
	const search = useSelector(getSearch())
	let dataFiltered = search
		? data.filter((item) => {
				return new RegExp(search, 'i').test(item.name)
		  })
		: data

	// фильтр по категории
	const category = useSelector(getCategory())
	let useCategory = Object.entries(category).reduce((acc, [key, val]) => {
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
	const sort = useSelector(getSort())
	if (sort === 'сначала не дорогие') {
		dataFiltered = [...dataFiltered].sort((a, b) => +a.price - +b.price)
	}
	if (sort === 'сначала дорогие') {
		dataFiltered = [...dataFiltered].sort((a, b) => +b.price - +a.price)
	}
	if (sort === 'сначала популярные') {
		dataFiltered = [...dataFiltered].sort((a, b) => +b.rate.value - +a.rate.value)
	}

	// Пагинация
	const pageNumber = useSelector(getPageNumber())
	const handleChangePage = (pageNumber) => {
		dispatch(pageNumberChange(pageNumber))
		window.scrollTo(0, 0)
	}
	const countOnPage = useSelector(getCountOnPage())
	const dataPaginate = paginate(dataFiltered, pageNumber, countOnPage)

	return (
		<div className={style.products_page_block}>
			<Filters className={style.filters} handleChangePage={handleChangePage} />
			<div className={style.product_container}>
				{isLoading && new Array(5).fill(0).map((item, i) => <ProductLoader key={i} />)}
				{isSuccess && (
					<>
						{dataPaginate.map((item) => (
							<Product {...item} key={item._id} isInCart={Boolean(cart[item._id])} />
						))}
						<Pagination
							itemsCount={dataFiltered.length}
							pageSize={+countOnPage}
							onPageChange={handleChangePage}
							currentPage={pageNumber}
						/>
					</>
				)}
				{isError && <Error />}
			</div>
		</div>
	)
}

ProductsPage.propTypes = {
	search: PropTypes.string,
}

export default ProductsPage
