import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ButtonBuy from '../buttonBuy'
import Rate from './rate/rate'
import style from './product.module.sass'

const Product = ({ id, src, name, description, price, isInCart, rate }) => {
	return (
		<div className={style.product}>
			<Link to={'/product/' + id}>
				<div className={style.product__img_container}>
					<img src={src} alt={src} className={style.product__img} />
				</div>
			</Link>
			<div className={style.product__info_container}>
				<h3>
					<Link to={'/product/' + id}>{name}</Link>
				</h3>
				<p className={style.product__description}>
					<span>{description}</span>
				</p>
				<Rate rate={rate} />
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
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isInCart: PropTypes.bool,
	name: PropTypes.string,
	price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rate: PropTypes.object,
	src: PropTypes.string,
}

export default Product
