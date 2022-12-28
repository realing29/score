const onMousedownAnimate = (ctx) => {
	const { offsetX, offsetY, target } = ctx.nativeEvent
	const button = target.closest('button')
	if (!button) return
	const animationClick = button.querySelector('.animation-click')
	animationClick.style.marginLeft = +offsetX + -button.clientWidth + 'px'
	animationClick.style.marginTop = +offsetY + -button.clientWidth + 'px'
	animationClick.style.width = button.clientWidth * 2 + 'px'
	animationClick.style.height = button.clientWidth * 2 + 'px'
}

const Button = ({ children, className, ...rest }) => {
	return (
		<button
			onMouseDown={onMousedownAnimate}
			className={`btn_design btn_animate ${className} `}
			{...rest}
		>
			<div className='animation-click'></div>
			{children}
		</button>
	)
}

export default Button
