import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addCart } from "../../../store/cart"
import "./buttonBuy.css"

const ButtonBuy = ({ id, isInCart }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addCart(id))
  }
  if (isInCart) {
    return (
      <Link to="/cart">
        <button className="product__buy">В корзине</button>
      </Link>
    )
  }
  return (
    <button className="product__buy" onClick={handleClick}>
      Купить
    </button>
  )
}

ButtonBuy.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isInCart: PropTypes.bool,
}

export default ButtonBuy
