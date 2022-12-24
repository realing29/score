import { useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getCartProducts } from '../../../store/cart'
import { useGetProductQuery } from '../../../store/productsApi'
import { getUser } from '../../../store/user'
import Error from '../../common/error'
import ButtonBuy from '../../ui/buttonBuy'
import CommentList from '../../ui/commentList'
import Rate from '../../ui/product/rate/rate'
import ProductAddComment from '../../ui/productAddComment/productAddComment'
import style from './productPage.module.sass'
import ProductPageLoader from './productPageLoader'

const ProductPage = () => {
	const { id } = useParams()
	const { data = {}, isLoading, isSuccess, isError } = useGetProductQuery(id)
	const cart = useSelector(getCartProducts())
	const user = useSelector(getUser())
	const isUser = Boolean(Object.keys(user).length)
	const location = useLocation()

	return (
		<>
			{isSuccess && (
				<div className={style.product_container}>
					<div className={style.product_card}>
						<h1>{data.name}</h1>
						<div className={style.product_card__container_img}>
							<img className={style.product_card__img} src={data.src} alt={data.src} />
						</div>
						<p>{data.description}</p>
						<Rate value={data.rate.value} count={data.rate.count} />
						<div className={style.product_card__price}>{data.price + ' ₽'}</div>
						<div className={style.product_card__buy_container}>
							<ButtonBuy _id={id} isInCart={Boolean(cart[id])} />
						</div>
					</div>
					<div className={style.comment_list_container}>
						{isUser ? (
							<ProductAddComment />
						) : (
							<div className={style.comment_list_container__is_not_auth}>
								<h2>
									<Link to='/login' state={{ from: location }}>
										Авторизуйтесь
									</Link>{' '}
									что бы оставлять отзывы
								</h2>
							</div>
						)}
						<CommentList />
					</div>
				</div>
			)}
			{isLoading && <ProductPageLoader />}
			{isError && <Error />}
		</>
	)
}

export default ProductPage
