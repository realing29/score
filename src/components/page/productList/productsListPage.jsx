import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import API from "../../../api"
import { getCartProducts } from "../../../store/cart"
import Product from "../../ui/product/product"
import ProductLoader from "../../ui/product/productLoader"
import "./productsList.css"

const ProductsPage = ({ search }) => {
  const cart = useSelector(getCartProducts())
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const result = await API.products.fetchAll()
    setProducts(result)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  const newProducts = search
    ? products.filter((item) => {
        return new RegExp(search).test(item.name)
      })
    : products

  return (
    <div>
      {newProducts
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
