import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCart } from '../../../store/cart'
import Button from '../../common/button'

interface ButtonBuyProps {
	_id: string
	isInCart: boolean
}

const ButtonBuy: FC<ButtonBuyProps> = ({ _id, isInCart }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleBuy = () => {
		// FIXME
		dispatch(addCart(_id) as any)
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

export default ButtonBuy
