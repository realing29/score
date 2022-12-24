import { useDispatch, useSelector } from 'react-redux'
import {
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
import useErrorToastify from '../../../hooks/useErrorToastify'
import Button from '../../common/button'
import { useState } from 'react'
import { toast } from 'react-toastify'

const defaultStarValue = [0, 0, 0, 0, 0]

const ProductAddComment = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState(defaultStarValue)
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

	const isErorr = rate < 1 || rate > 5

	const user = useSelector(getUser())

	const isDisabled = isErorr || isLoading

	const handleSubmit = () => {
		if (isDisabled) return toast('Нужно поставить оценку')
		productRateUpdate({ _id: id, rate })
		setValue(defaultStarValue)
		setRate(0)
		toast('Спасибо за ваш отзыв')
		if (text === '') return
		const commentData = { text, rate, productId: id, ...user }
		addComment(commentData)
		dispatch(newCommentChange(''))
	}

	const load = isLoading ? 'load' : ''

	const buttonStyle = `${load} ${isDisabled ? 'btn_design_disabled' : ''}`

	return (
		<div className={style.comment_list_add}>
			<h2>Добавить отзыв</h2>
			<h3>Оценка:</h3>
			<StarChanger {...{ setValue, value, setRate }} />
			<h3>Текст сообщения:</h3>
			<textarea
				value={text}
				onChange={setComment}
				className={style.comment_list_add__textarea}
				placeholder='Текст не обязателен'
			/>
			<Button onClick={handleSubmit} className={buttonStyle} title=''>
				Отправить
			</Button>
		</div>
	)
}

export default ProductAddComment
