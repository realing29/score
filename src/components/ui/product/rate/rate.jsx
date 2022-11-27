import PropTypes from 'prop-types'
import Stars from './stars'
import style from './rate.module.sass'

const Rate = ({ rate }) => {
	const { count, value } = rate

	return (
		<div className={style.product__rate}>
			<p>
				{value}
				<Stars value={value} />
				<sup>{count}</sup>
			</p>
		</div>
	)
}

Rate.propTypes = {
	rate: PropTypes.object,
}

export default Rate
