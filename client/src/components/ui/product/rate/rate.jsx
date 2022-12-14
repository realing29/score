import PropTypes from 'prop-types'
import Stars from './stars'
import style from './rate.module.sass'

const Rate = ({ value, count }) => {
	return (
		<div className={style.product__rate}>
			{value ? value.toFixed(1) : value}
			<div>
				<Stars value={value} />
				<sup>{count}</sup>
			</div>
		</div>
	)
}

Rate.propTypes = {
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	count: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
}

export default Rate
