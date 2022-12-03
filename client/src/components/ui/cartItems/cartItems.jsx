import PropTypes from 'prop-types'
import style from './cartItems.module.sass'

const CartItems = ({ products, onChangeAmount }) => {
	const handleChangeAmount = (e, id) => {
		if (e.target.value >= 0) {
			onChangeAmount.set(id, e.target.value)
		}
	}
	const newProducts = Object.values(products)
	if (newProducts.length > 0) {
		return (
			<>
				{newProducts.map(({ amount, price, name, src, id }) => (
					<div key={id} className={style.item_cart}>
						<div className={style.item_cart__container_img}>
							<img className={style.item_cart__img} src={src} alt={src} />
						</div>
						<h3 className={style.item_cart__name}>{name}</h3>
						<p className={style.item_cart__price}>{price} р.</p>
						<p>x</p>
						<button onClick={() => onChangeAmount.decrement(id)}>-</button>
						<input
							className={style.item_cart__amount}
							type='text'
							value={amount}
							step='1'
							onChange={(e) => handleChangeAmount(e, id)}
						/>
						<button onClick={(e) => onChangeAmount.increment(id)}>+</button>
						<p>{' шт.'}</p>
						<p>=</p>
						<p>{+amount * +price} р.</p>
					</div>
				))}
			</>
		)
	} else {
		return 'Корзина пуста'
	}
}

CartItems.propTypes = {
	products: PropTypes.object,
	onChangeAmount: PropTypes.object,
}

export default CartItems