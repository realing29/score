import React, { FC } from 'react';
const onMousedownAnimate = (event: React.MouseEvent<HTMLButtonElement>) => {
	const { offsetX, offsetY, target } = event.nativeEvent
	
	const button: HTMLElement | null = (target as HTMLElement).closest('button')
	if (!button) return
	const animationClick = button.querySelector('.animation-click') as HTMLButtonElement
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

const Button: FC<ButtonProps> = ({ className, children, ...rest } ) => {
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