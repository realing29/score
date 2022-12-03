import { useEffect, useState } from 'react'
import API from '../../api'
import CartItems from '../../components/ui/cartItems'
import style from './cart.module.sass'
import TotalAmount from '../../components/ui/totalAmount'
import { changeCartProductAmount, getCartProducts } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
	const [products, setProducts] = useState({})
	const dispatch = useDispatch()
	const cart = useSelector(getCartProducts())
	useEffect(() => {
		Object.entries(cart).map(async ([id, { amount }]) => {
			if (!products[id]) {
				const item = { ...(await API.products.getById(id)), amount }
				setProducts((prev) => ({ ...prev, [id]: item }))
			}
		})
		const newProduct = { ...products }
		Object.keys(products).forEach((id) => {
			if (!cart[id]) {
				delete newProduct[id]
			}
		})
		setProducts(newProduct)
	}, [cart])

	const handleAmountChange = {
		increment: (id) => {
			setProducts((prev) => ({
				...prev,
				[id]: { ...prev[id], amount: +prev[id].amount + 1 },
			}))
			dispatch(changeCartProductAmount({ id, val: +products[id].amount + 1 }))
		},
		decrement: (id) => {
			setProducts((prev) => ({
				...prev,
				[id]: { ...prev[id], amount: +prev[id].amount - 1 },
			}))
			dispatch(changeCartProductAmount({ id, val: +products[id].amount - 1 }))
		},
		set: (id, val) => {
			setProducts((prev) => ({ ...prev, [id]: { ...prev[id], amount: val } }))
			dispatch(changeCartProductAmount({ id, val }))
		},
	}

	const total = Object.values(products).reduce(
		(acc, cur) => {
			return {
				sum: +acc.sum + +cur.amount * +cur.price,
				amount: +acc.amount + +cur.amount,
			}
		},
		{ amount: 0, sum: 0 },
	)

	return (
		<div className={style.cart_container}>
			<h1>Корзина</h1>
			<CartItems products={products} onChangeAmount={handleAmountChange} />
			<TotalAmount {...total} />
		</div>
	)
}

export default Cart
