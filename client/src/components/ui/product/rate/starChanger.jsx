import PropTypes from 'prop-types'
import star from './star'
import style from './starChanger.module.sass'

const StarChanger = ({ setRate, value, setValue }) => {
	const starType = (val) => (val ? star.full : star.void)

	const handleClick = (e) => {
		let order = e.target.dataset.order
		if (order === undefined) return
		order = +order
		setRate(order + 1)
		const newStar = [0, 0, 0, 0, 0]
		while (order >= 0) {
			newStar[order] = 1
			order--
		}
		setValue(newStar)
	}
	return (
		<div onClick={handleClick}>
			<img src={starType(value[0])} data-order='0' className={style.star} alt='star' />
			<img src={starType(value[1])} data-order='1' className={style.star} alt='star' />
			<img src={starType(value[2])} data-order='2' className={style.star} alt='star' />
			<img src={starType(value[3])} data-order='3' className={style.star} alt='star' />
			<img src={starType(value[4])} data-order='4' className={style.star} alt='star' />
		</div>
	)
}

StarChanger.propTypes = {
	setRate: PropTypes.func,
	setValue: PropTypes.func,
	value: PropTypes.any,
}

export default StarChanger
