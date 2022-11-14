import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import {
  fetchProductsAsync,
  getProducts,
  getProductsLoadStatus,
} from '../../../store/products'
import Product from '../../ui/product/product'
import ProductLoader from '../../ui/product/productLoader/productLoader'
import style from './product.module.sass'

const ProductsPage = ({ search }) => {
  const dispatch = useDispatch()
  const cart = useSelector(getCartProducts())
  const products = useSelector(getProducts())
  const productsLoadStatus = useSelector(getProductsLoadStatus())

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [])

  const newProducts = search
    ? products.filter((item) => {
        return new RegExp(search).test(item.name)
      })
    : products
  return (
    <div className={style.product_container}>
      {{
        loading: () => new Array(10).fill(0).map((item, i) => <ProductLoader key={i} />),
        loaded: () =>
          newProducts.map((item) => (
            <Product {...item} key={item.id} isInCart={Boolean(cart[item.id])} />
          )),
        error: () => 'Произошла ошибка',
      }[productsLoadStatus]()}
    </div>
  )
}

ProductsPage.propTypes = {
  search: PropTypes.string,
}

export default ProductsPage
