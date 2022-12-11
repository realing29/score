import PropTypes from 'prop-types'
import style from './textField.module.sass'

const TextField = ({ label, type, name, value, onChange, error, className }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	return (
		<div className={`${style.text_field} ${className}`}>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} id={name} value={value} onChange={handleChange} />
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	)
}

TextField.defaultProps = {
	type: 'text',
	className: '',
}

TextField.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.string,
}

export default TextField
