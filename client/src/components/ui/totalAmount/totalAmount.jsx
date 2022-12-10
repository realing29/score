import PropTypes from 'prop-types'
import style from './totalAmount.module.sass'

const TotalAmount = ({ sum, amount }) => {
	return (
		<div className={style.total_container}>
			<h2 className={style.total_container__title}>Итого</h2>
			<p>Товаров: {amount}</p>
			<p className={style.total_container__sum}>{sum} р.</p>
			<button className={style.total_container__buy}>Оформить</button>
		</div>
	)
}

TotalAmount.propTypes = {
	amount: PropTypes.number,
	sum: PropTypes.number,
}

export default TotalAmount
