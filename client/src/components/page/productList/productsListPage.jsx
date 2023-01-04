import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import {
	categoryV2Update,
	getCategoryV2,
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

	useEffect(() => {
		dispatch(categoryV2Update())
	}, [])

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
	const category = useSelector(getCategoryV2())
	let useCategory = Object.entries(category).reduce((acc, [_id, category]) => {
		if (category.checked) {
			acc.push(_id)
		}
		return acc
	}, [])

	if (useCategory.length) {
		dataFiltered = dataFiltered.filter((item) => {
			for (const categoryId of useCategory) {
				if (item.categoryId === categoryId) return true
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
						{!dataPaginate.length && (
							<h2 className={style.notFound}>
								Результаты не найдены, попробуйте изменить запрос поиска
							</h2>
						)}
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
