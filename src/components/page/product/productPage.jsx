import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import API from "../../../api"
import { getCartProducts } from "../../../store/cart"
import ButtonBuy from "../../ui/buttonBuy"
import style from "./product.module.sass"

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
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
      <div className={style.product_card}>
        <h1>{product.name}</h1>
        <div className={style.product_card__container_img}>
          <img className={style.product_card__img} src={product.src} alt={product.src} />
        </div>
        <p>{product.description}</p>
        <div className={style.product_card__price}>{product.price + " ₽"}</div>
        <ButtonBuy id={id} isInCart={Boolean(cart[id])} />
      </div>
    )
  )
}

export default ProductPage
