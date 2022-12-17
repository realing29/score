import PropTypes from 'prop-types'
import { useState } from 'react'
import style from './textField.module.sass'

const TextField = ({ label, type, name, value, onChange, error, className, ...rest }) => {
	const [showPassword, setShowPassword] = useState(false)

	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	const toggleShowPassword = () => {
		setShowPassword((prevState) => !prevState)
	}
	const inputErrorClass = error ? ' ' + style.text_field__input__invalid : ''

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
					className={style.text_field__input + inputErrorClass}
					{...rest}
				/>
				{type === 'password' && (
					<button
						className={style.text_field__show_btn}
						type='button'
						onClick={toggleShowPassword}
					>
						<img
							src={
								showPassword
									? '/assets/eye_show_filled_icon_200617.png'
									: '/assets/eye_show_regular_icon_203603.png'
							}
							alt='&#128065;'
							className={style.text_field__show_img}
						/>
					</button>
				)}
			</div>
			{error && <div className={style.text_field__invalid_feedback}>{error}</div>}
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
