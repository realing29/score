import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ButtonBuy from '../buttonBuy'
import style from './style.module.sass'

const Product = ({ id, src, name, description, price, isInCart }) => {
  return (
    <div className={style.product}>
      <div className={style.product__img_container}>
        <img src={src} alt={src} className={style.product__img} />
      </div>
      <div className={style.product__info_container}>
        <h3>
          <Link to={'/product/' + id}>{name}</Link>
        </h3>
        <p>
          <span>{description}</span>
        </p>
      </div>
      <div className={style.product__buy_container}>
        <p className={style.product__price}>
          <span>{price + ' ₽'}</span>
        </p>
        <ButtonBuy id={id} isInCart={isInCart} />
      </div>
    </div>
  )
}

Product.propTypes = {
  description: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isInCart: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  src: PropTypes.string,
}

export default Product
