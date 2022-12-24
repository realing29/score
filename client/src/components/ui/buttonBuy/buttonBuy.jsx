import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../../store/cart'
import Button from '../../common/button'
// import style from './buttonBuy.module.sass'

const ButtonBuy = ({ _id, isInCart }) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(addCart(_id))
	}
	if (isInCart) {
		return (
			<Link to='/cart'>
				<Button>В корзине</Button>
			</Link>
		)
	}
	return <Button onClick={handleClick}>Купить</Button>
}

ButtonBuy.propTypes = {
	_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isInCart: PropTypes.bool,
}

export default ButtonBuy
