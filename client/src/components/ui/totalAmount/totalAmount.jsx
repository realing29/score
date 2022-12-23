import PropTypes from 'prop-types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import ButtonDelete from '../buttonDelete/buttonDelete'
import style from './totalAmount.module.sass'

const TotalAmount = ({ sum, amount }) => {
	const [isActiveJoke, setActiveJoke] = useState(false)

	const handleJoke = () => {
		setActiveJoke((prev) => !prev)
		toast("it's fun")
	}
	return (
		<div className={style.total_container}>
			<h2 className={style.total_container__title}>Итого</h2>
			<p>Товаров: {amount}</p>
			<p className={style.total_container__sum}>{sum} р.</p>
			<button className={style.total_container__buy + ' btn_design'} onClick={handleJoke}>
				Оформить
			</button>
			{isActiveJoke && (
				<div className={style.joke}>
					<div className={style.joke__content}>
						<header className={style.joke__header}>
							<h2>Введите данные вашей банковской карты</h2>
							<ButtonDelete handleDelete={handleJoke} />
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
						<button className='btn_design' onClick={handleJoke}>
							Оплатить
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

TotalAmount.propTypes = {
	amount: PropTypes.number,
	sum: PropTypes.number,
}

export default TotalAmount
