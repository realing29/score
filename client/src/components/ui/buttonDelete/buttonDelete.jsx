import PropTypes from 'prop-types'
import style from './buttonDelete.module.sass'

const ButtonDelete = ({ handleDelete, ...rest }) => {
	return (
		<button className={style.button_delete} onClick={handleDelete} {...rest}>
			+
		</button>
	)
}

ButtonDelete.propTypes = {
	handleDelete: PropTypes.func,
}

export default ButtonDelete
