import CartItems from '../../components/ui/cartItems'
import style from './cart.module.sass'
import TotalAmount from '../../components/ui/totalAmount'
import { changeCartProductAmount, getCartProducts } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsIdsQuery } from '../../store/productsApi'
import { useEffect, useState } from 'react'
import CartLoader from './cartLoader'
import Error from '../../components/common/error'

const Cart = () => {
	const dispatch = useDispatch()
	const cart = useSelector(getCartProducts())

	const ids = Object.keys(cart)
	const { data: products, isLoading, isSuccess, isError } = useGetProductsIdsQuery(ids)
	const [mergeProductsAmount, setMergeProductsAmount] = useState({})
	const [total, setTotal] = useState({ amount: 0, sum: 0 })

	useEffect(() => {
		if (!isSuccess) return

		const newMergeProductsAmount = {}

		products.forEach((product) => {
			if (cart[product._id]) {
				newMergeProductsAmount[product._id] = {
					...product,
					amount: cart[product._id].amount,
				}
			}
			setMergeProductsAmount(newMergeProductsAmount)
		})
	}, [isSuccess])

	useEffect(() => {
		if (!isSuccess) return

		const newMergeProductsAmount = {}
		products.forEach((product) => {
			if (cart[product._id]) {
				newMergeProductsAmount[product._id] = {
					...product,
					amount: cart[product._id].amount,
				}
			} else {
				delete newMergeProductsAmount[product._id]
			}
		})
		setMergeProductsAmount(newMergeProductsAmount)
	}, [cart])

	useEffect(() => {
		if (!isSuccess) return

		const total = Object.values(mergeProductsAmount).reduce(
			(acc, cur) => {
				return {
					sum: +acc.sum + +cur.amount * +cur.price,
					amount: +acc.amount + +cur.amount,
				}
			},
			{ amount: 0, sum: 0 },
		)

		setTotal(total)
	}, [mergeProductsAmount])

	const handleAmountChange = {
		increment: (id) => {
			dispatch(changeCartProductAmount({ id, val: +mergeProductsAmount[id].amount + 1 }))
		},
		decrement: (id) => {
			dispatch(changeCartProductAmount({ id, val: +mergeProductsAmount[id].amount - 1 }))
		},
		set: (id, val) => {
			dispatch(changeCartProductAmount({ id, val }))
		},
	}

	return (
		<div className={style.cart_container}>
			<h1>Корзина</h1>
			{isSuccess && (
				<>
					<CartItems products={mergeProductsAmount} onChangeAmount={handleAmountChange} />
					<TotalAmount {...total} />
				</>
			)}
			{isLoading && <CartLoader />}
			{isError && <Error />}
		</div>
	)
}

export default Cart
