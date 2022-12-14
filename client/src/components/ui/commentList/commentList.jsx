import { useParams } from 'react-router-dom'
import { useGetCommentListQuery } from '../../../store/commentsApi'
import Rate from '../product/rate/rate'
import ProfileIco from '../profileIco'
import style from './commentList.module.sass'

const CommentList = () => {
	const { id } = useParams()
	const { data, isSuccess } = useGetCommentListQuery(id)

	let comments = []
	if (isSuccess) {
		comments = [...data].sort((a, b) => new Date(b.create_at) - new Date(a.create_at))
	}
	console.log(comments)

	return (
		<div className={style.comment_list}>
			<h2>Список комментариев:</h2>
			{isSuccess &&
				comments.map((comment) => {
					return (
						<div key={comment._id}>
							<header className={style.comment_header}>
								<ProfileIco />
								<h3> {comment.login}</h3>
							</header>
							<Rate value={comment.rate} />
							<p>{comment.text}</p>
							<hr />
						</div>
					)
				})}
		</div>
	)
}

export default CommentList
