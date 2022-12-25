import PropTypes from 'prop-types'
import star from './star'

const Stars = ({ value }) => {
	if (value === null) {
		return (
			<>
				нет отзывов <img src={star.void} />
			</>
		)
	}

	const classes = []
	while (classes.length < 5) {
		value--
		if (value >= 0) {
			classes.push(star.full)
		} else if (value > -0.5) {
			classes.push(star.half)
		} else {
			classes.push(star.void)
		}
	}

	return (
		<>
			{classes.map((enties, i) => (
				<img key={'star' + i} src={enties} alt='star' />
			))}
		</>
	)
}

export default Stars
Stars.propTypes = {
	value: PropTypes.number,
}
