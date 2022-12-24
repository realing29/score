import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useErrorToastify from '../../../hooks/useErrorToastify'
import {
	useDelteCommentMutation,
	useGetCommentListQuery,
} from '../../../store/commentsApi'
import { getUser } from '../../../store/user'
import Error from '../../common/error'
import ButtonDelete from '../buttonDelete/buttonDelete'
import Rate from '../product/rate/rate'
import ProfileIco from '../profileIco'
import style from './commentList.module.sass'

const CommentList = () => {
	const { id } = useParams()
	const { data, isSuccess, isError, isLoading } = useGetCommentListQuery(id)

	const { userId = null } = useSelector(getUser())

	let comments = []
	if (isSuccess) {
		comments = [...data].sort((a, b) => new Date(b.create_at) - new Date(a.create_at))
	}

	const [commentDelete, status] = useDelteCommentMutation()
	useErrorToastify(status.isError)

	const isCommentsAndSuccess = Boolean(comments.length) && isSuccess

	const isNotCommentsAndSuccess = !Boolean(comments.length) && isSuccess

	return (
		<div className={style.comment_list}>
			{isCommentsAndSuccess && (
				<>
					<h2>Отзывы:</h2>
					{comments.map((comment) => {
						return (
							<div key={comment._id}>
								<header className={style.comment_header}>
									<ProfileIco />
									<h3> {comment.login}</h3>
									{userId === comment.userId && (
										<ButtonDelete
											style={{ fontSize: '50px', marginLeft: 'auto' }}
											handleDelete={() => commentDelete(comment._id)}
											title='Удалить отзыв'
										/>
									)}
								</header>
								<Rate value={comment.rate} />
								<p>{comment.text}</p>
								<hr />
							</div>
						)
					})}
				</>
			)}
			{isNotCommentsAndSuccess && <h2>Отзывов нет</h2>}
			{isLoading && <h2>Комментарии загружаются...</h2>}
			{isError && <Error text='детали ошибки - комментарии не загрузились' />}
		</div>
	)
}

export default CommentList
