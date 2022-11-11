import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import API from "../../../api"
// import { useCart } from "../../../hooks/useCart";
import { getCartProducts } from "../../../store/cart"
import ButtonBuy from "../../ui/buttonBuy"
import "./product.css"

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  // const { cart } = useCart();
  const cart = useSelector(getCartProducts())

  const getProduct = async (id) => {
    const product = await API.products.getById(id)
    setProduct(product)
  }
  useEffect(() => {
    getProduct(id)
  }, [id])
  return (
    product && (
      <div className="product-card">
        <h1>{product.name}</h1>
        <div className="product-card__container-img">
          <img className="product-card__img" src={product.src} alt={product.src} />
        </div>
        <p>{product.description}</p>
        <div className="product-card__price">{product.price + " ₽"}</div>
        <ButtonBuy id={id} isInCart={Boolean(cart[id])} />
      </div>
    )
  )
}

export default ProductPage
