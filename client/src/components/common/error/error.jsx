import PropTypes from 'prop-types'
import style from './error.module.sass'

const Error = ({ text = '' }) => {
	return (
		<div className={style.error}>
			<div className={style.error__cross}>+</div>
			<h2>произошла ошибка попробуйте позже</h2>
			<p>{text}</p>
		</div>
	)
}

Error.propTypes = {
	text: PropTypes.string,
}

export default Error
