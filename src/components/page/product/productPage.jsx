import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCartProducts } from '../../../store/cart'
import { useGetProductQuery } from '../../../store/productsApi'
import ButtonBuy from '../../ui/buttonBuy'
import style from './productPage.module.sass'

const ProductPage = () => {
	const { id } = useParams()
	const { data = {}, isLoading, isSuccess, isError } = useGetProductQuery(id)
	const cart = useSelector(getCartProducts())
	return (
		<>
			{isSuccess && (
				<div className={style.product_card}>
					<h1>{data.name}</h1>
					<div className={style.product_card__container_img}>
						<img className={style.product_card__img} src={data.src} alt={data.src} />
					</div>
					<p>{data.description}</p>
					<div className={style.product_card__price}>{data.price + ' ₽'}</div>
					<ButtonBuy id={id} isInCart={Boolean(cart[id])} />
				</div>
			)}
			{isLoading && 'Loading...'}
			{isError && 'Error... '}
		</>
	)
}

export default ProductPage
