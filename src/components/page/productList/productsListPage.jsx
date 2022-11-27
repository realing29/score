import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import { useGetProductsListQuery } from '../../../store/productsApi'
import Product from '../../ui/product/product'
import ProductLoader from '../../ui/product/productLoader/productLoader'
import style from './product.module.sass'

const ProductsPage = ({ search }) => {
	const cart = useSelector(getCartProducts())
	const { data = [], isLoading, isSuccess, isError } = useGetProductsListQuery()

	const dataFiltered = search
		? data.filter((item) => {
				return new RegExp(search).test(item.name)
		  })
		: data
	return (
		<div className={style.product_container}>
			{isLoading && new Array(10).fill(0).map((item, i) => <ProductLoader key={i} />)}
			{isSuccess &&
				dataFiltered.map((item) => (
					<Product {...item} key={item.id} isInCart={Boolean(cart[item.id])} />
				))}
			{isError && 'Произошла ошибка при загрузке товаров'}
		</div>
	)
}

ProductsPage.propTypes = {
	search: PropTypes.string,
}

export default ProductsPage
