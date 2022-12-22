import { useDispatch, useSelector } from 'react-redux'
import {
	getErrors,
	getNewComment,
	getNewRate,
	newCommentChange,
	newRateChange,
} from '../../../store/comments'
import StarChanger from '../product/rate/starChanger'
import style from './productAddComment.module.sass'
import { useParams } from 'react-router-dom'
import { useUpdateProductRateMutation } from '../../../store/productsApi'
import { useAddCommentMutation } from '../../../store/commentsApi'
import { getUser } from '../../../store/user'
// import { useEffect } from 'react'
// import { toast } from 'react-toastify'
import useErrorToastify from '../../../hooks/useErrorToastify'

const ProductAddComment = () => {
	const dispatch = useDispatch()
	let { id } = useParams()
	const rate = useSelector(getNewRate())
	const [productRateUpdate] = useUpdateProductRateMutation()
	const [addComment, status] = useAddCommentMutation()
	const { isLoading } = status

	useErrorToastify(status.isError)

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

	const handleSubmit = () => {
		productRateUpdate({ _id: id, rate })

		if (text === '') return
		const commentData = { text, rate, productId: id, ...user }
		addComment(commentData)
		dispatch(newCommentChange(''))
	}

	const load = isLoading ? 'load' : ''

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
				disabled={isErorr || isLoading}
				className={`btn_design ${style.comment_list_add__submit} ${load}`}
			>
				Отправить
			</button>
		</div>
	)
}

export default ProductAddComment
