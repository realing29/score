import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children, error, checked = false }) => {
	const handleChange = () => {
		onChange({ name: name, value: value, checked: !checked })
	}
	const getInputClasses = () => {
		return 'form-check-input' + (error ? ' is-invalid' : '')
	}
	return (
		<div className='form-check mb-4'>
			<input
				className={getInputClasses()}
				type='checkbox'
				value={value}
				id={value}
				onChange={handleChange}
				checked={checked}
			/>
			<label className='form-check-label' htmlFor={value}>
				{children}
			</label>
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	)
}
CheckBoxField.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	error: PropTypes.string,
}

export default CheckBoxField
