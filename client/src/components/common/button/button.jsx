const Button = ({ children, className, ...rest }) => {
	return (
		<button className={`btn_design ${className}`} {...rest}>
			{children}
		</button>
	)
}

export default Button
