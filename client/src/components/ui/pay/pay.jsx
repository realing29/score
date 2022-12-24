import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { clearCart } from '../../../store/cart'
import Button from '../../common/button'
import ButtonDelete from '../buttonDelete/buttonDelete'
import style from './pay.module.sass'

const Pay = ({ handleJoke }) => {
	const dispatch = useDispatch()

	const [isJoke, setJoke] = useState(false)
	const [timeIds, setTimeIds] = useState([])

	useEffect(() => {
		const timeId = setTimeout(() => {
			setJoke(true)
		}, 3000)
		const timeId2 = setTimeout(() => {
			handleJoke()
		}, 6000)
		setTimeIds((prev) => [...prev, timeId, timeId2])
	}, [])

	const handleBuy = () => {
		timeIds.map((id) => clearTimeout(id))

		toast('Заказ оплачен, С Новым Годом!')
		handleJoke()
		dispatch(clearCart())
	}

	const handleCancel = () => {
		timeIds.map((id) => clearTimeout(id))
		handleJoke()
	}

	return (
		<div className={style.joke}>
			{!isJoke && (
				<div className={style.joke__content}>
					<header className={style.joke__header}>
						<h2>Введите данные вашей банковской карты</h2>
						<ButtonDelete handleDelete={handleCancel} />
					</header>
					<label className={style.joke__number}>
						<p>Номер карты</p>
						<input type='text' />
					</label>
					<div className={style.joke__date_cvv}>
						<label className={style.joke__container_input}>
							<p>Срок действия</p>
							<input type='text' className={style.joke__input_short} />
						</label>
						<label className={style.joke__container_input}>
							<p>CVV</p>
							<input type='text' className={style.joke__input_short} />
						</label>
					</div>
					<Button onClick={handleBuy}>Оплатить</Button>
				</div>
			)}
			{isJoke && (
				<div className={style.joke__container_text}>
					<h2 className={style.joke__text}>Это шутка))) С Новым Годом!</h2>
				</div>
			)}
		</div>
	)
}

Pay.propTypes = {
	handleJoke: PropTypes.func,
}

export default Pay
