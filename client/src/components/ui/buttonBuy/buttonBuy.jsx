import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addCart } from '../../../store/cart'
import Button from '../../common/button'

const ButtonBuy = ({ _id, isInCart }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleBuy = () => {
		dispatch(addCart(_id))
	}

	const handleToCart = () => {
		navigate('/cart')
	}

	return (
		<Button onClick={isInCart ? handleToCart : handleBuy}>
			{isInCart ? 'В корзине' : 'Купить'}
		</Button>
	)
}

ButtonBuy.propTypes = {
	_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isInCart: PropTypes.bool,
}

export default ButtonBuy
