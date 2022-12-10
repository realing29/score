import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../../store/cart'
import style from './buttonBuy.module.sass'

const ButtonBuy = ({ _id, isInCart }) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(addCart(_id))
	}
	if (isInCart) {
		return (
			<Link to='/cart'>
				<button className={style.product__buy}>В корзине</button>
			</Link>
		)
	}
	return (
		<button className={style.product__buy} onClick={handleClick}>
			Купить
		</button>
	)
}

ButtonBuy.propTypes = {
	_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isInCart: PropTypes.bool,
}

export default ButtonBuy
