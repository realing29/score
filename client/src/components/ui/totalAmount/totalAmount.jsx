import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../../common/button'
import Pay from '../pay'
import style from './totalAmount.module.sass'

const TotalAmount = ({ sum, amount }) => {
	const [isActiveJoke, setActiveJoke] = useState(false)

	const handleJoke = () => {
		setActiveJoke((prev) => !prev)
	}
	return (
		<div className={style.total_container}>
			<h2 className={style.total_container__title}>Итого</h2>
			<p>Товаров: {amount}</p>
			<p className={style.total_container__sum}>{sum} р.</p>
			<Button className={style.total_container__buy} onClick={handleJoke}>
				Оформить
			</Button>
			{isActiveJoke && <Pay {...{ handleJoke }} />}
		</div>
	)
}

TotalAmount.propTypes = {
	amount: PropTypes.number,
	sum: PropTypes.number,
}

export default TotalAmount
