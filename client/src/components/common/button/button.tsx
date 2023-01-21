import React, { FC } from 'react'
const handleMousedownAnimate = (event: React.MouseEvent<HTMLElement>) => {
	const { offsetX, offsetY, target } = event.nativeEvent

	const button = (target as HTMLElement).closest('button')
	if (!button) return

	const animationClick: HTMLElement | null = button.querySelector('.animation-click')
	if (!animationClick) return

	animationClick.style.marginLeft = +offsetX + -button.clientWidth + 'px'
	animationClick.style.marginTop = +offsetY + -button.clientWidth + 'px'
	animationClick.style.width = button.clientWidth * 2 + 'px'
	animationClick.style.height = button.clientWidth * 2 + 'px'
}

interface ButtonProps {
	className?: string
	children: React.ReactNode
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
	return (
		<button
			onMouseDown={handleMousedownAnimate}
			className={`btn_design btn_animate ${className} `}
			{...rest}
		>
			<div className='animation-click'></div>
			{children}
		</button>
	)
}

export default Button
