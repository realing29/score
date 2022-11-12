import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProducts } from '../../../store/cart'
import { getProducts, getProductsLoadStatus, loadProducts } from '../../../store/products'
import Product from '../../ui/product/product'
import ProductLoader from '../../ui/product/productLoader'

const ProductsPage = ({ search }) => {
  const dispatch = useDispatch()
  const cart = useSelector(getCartProducts())
  const products = useSelector(getProducts())
  const usersIsLoad = useSelector(getProductsLoadStatus())

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const newProducts = search
    ? products.filter((item) => {
        return new RegExp(search).test(item.name)
      })
    : products
  return (
    <div>
      {usersIsLoad
        ? newProducts.map((item) => (
            <Product {...item} key={item.id} isInCart={Boolean(cart[item.id])} />
          ))
        : new Array(10).fill(0).map((item, i) => <ProductLoader key={i} />)}
    </div>
  )
}

ProductsPage.propTypes = {
  search: PropTypes.string,
}

export default ProductsPage
