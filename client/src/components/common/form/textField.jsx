import PropTypes from 'prop-types'
import { useState } from 'react'
import style from './textField.module.sass'

const TextField = ({ label, type, name, value, onChange, error, className }) => {
	const [showPassword, setShowPassword] = useState(false)

	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	const toggleShowPassword = () => {
		setShowPassword((prevState) => !prevState)
	}
	return (
		<div className={`${style.text_field} ${className}`}>
			<label htmlFor={name}>{label}</label>
			<div className={style.text_field__input_container}>
				<input
					type={showPassword ? 'text' : type}
					name={name}
					id={name}
					value={value}
					onChange={handleChange}
					className={style.text_field__input}
				/>
				{type === 'password' && (
					<button
						className='btn btn-outline-secondary'
						type='button'
						onClick={toggleShowPassword}
					>
						<i className={'bi bi-eye' + (showPassword ? '-slash' : '')}>&#128065;</i>
					</button>
				)}
			</div>
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
