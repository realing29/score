import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import { useGetProductsQuery } from '../../../store/productsApi'
import Product from '../../ui/product/product'
import ProductLoader from '../../ui/product/productLoader/productLoader'
import style from './product.module.sass'

const ProductsPage = ({ search }) => {
	const cart = useSelector(getCartProducts())
	const result = useGetProductsQuery()
	const { data: products = [], status } = result
	console.log(result)

	const newProducts = search
		? products.filter((item) => {
				return new RegExp(search).test(item.name)
		  })
		: products
	return (
		<div className={style.product_container}>
			{{
				pending() {
					return new Array(10).fill(0).map((item, i) => <ProductLoader key={i} />)
				},
				fulfilled() {
					return newProducts.map((item) => (
						<Product {...item} key={item.id} isInCart={Boolean(cart[item.id])} />
					))
				},
				rejected() {
					return 'Произошла ошибка при загрузке товаров'
				},
			}[status]()}
		</div>
	)
}

ProductsPage.propTypes = {
	search: PropTypes.string,
}

export default ProductsPage
