import { useDispatch, useSelector } from 'react-redux'
import {
	getErrors,
	getNewComment,
	getNewRate,
	newCommentChange,
	newRateChange,
	submitNewComment,
} from '../../../store/comments'
import StarChanger from '../product/rate/starChanger'
import style from './productAddComment.module.sass'
import { useParams } from 'react-router-dom'
import { useUpdateProductRateMutation } from '../../../store/productsApi'
import { useAddCommentMutation } from '../../../store/commentsApi'
import { getUser } from '../../../store/user'

const ProductAddComment = () => {
	const dispatch = useDispatch()
	let { id } = useParams()
	const rate = useSelector(getNewRate())
	const [productRateUpdate] = useUpdateProductRateMutation()
	const [addComment] = useAddCommentMutation()

	const setRate = (val) => {
		dispatch(newRateChange(val))
	}

	const setComment = ({ target }) => {
		dispatch(newCommentChange(target.value))
	}

	const text = useSelector(getNewComment())

	const errors = useSelector(getErrors())

	const isErorr = Boolean(Object.keys(errors).length)

	const user = useSelector(getUser())

	const handleSubmit = async () => {
		const result = await productRateUpdate({ _id: id, rate })

		if (text === '') return
		const commentData = { text, rate, productId: id, ...user }
		await addComment(commentData)
		dispatch(newCommentChange(''))
	}

	return (
		<div className={style.comment_list_add}>
			<h2>Добавить отзыв</h2>
			<h3>Оценка:</h3>
			<StarChanger setRate={setRate} />
			<h3>Текст сообщения:</h3>
			<textarea
				value={text}
				onChange={setComment}
				className={style.comment_list_add__textarea}
			/>
			<button
				onClick={handleSubmit}
				disabled={isErorr}
				className={'btn_design ' + style.comment_list_add__submit}
			>
				Отправить
			</button>
		</div>
	)
}

export default ProductAddComment
