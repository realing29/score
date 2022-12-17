import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../../store/user'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../../store/userApi'
import TextField from '../../common/form/textField'
import style from './profile.module.sass'

const Profile = () => {
	const user = useSelector(getUser())
	const [isEdit, setEdit] = useState(false)
	const [newUserData, setNewUserData] = useState({
		_id: '',
		login: '',
		address: '',
		email: '',
		phone: '',
	})
	const { data, isSuccess, isLoading } = useGetUserByIdQuery(user.userId)
	const [error, setError] = useState({ login: null })
	const [updateUser, updateUserResult] = useUpdateUserMutation()

	useEffect(() => {
		if (isSuccess) setNewUserData((prev) => ({ ...prev, ...data }))
	}, [isSuccess])

	const handleCancel = () => {
		setEdit(false)
	}

	useEffect(() => {
		if (updateUserResult?.error?.data?.message === 'Duplicate login') {
			setError({ login: 'Логин уже занят' })
		}
	}, [updateUserResult])

	const handleSubmit = async () => {
		setEdit(false)
		updateUser(newUserData)
	}

	const handleChange = ({ name, value }) => {
		setNewUserData((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<div className={style.profile}>
			<h1>Мой профиль</h1>
			{isSuccess && (
				<>
					<TextField
						label='ID пользователя'
						name='_id'
						value={newUserData._id}
						type='id'
						onChange={handleChange}
						disabled
					/>
					<TextField
						label='Логин'
						name='login'
						value={newUserData.login}
						type='login'
						onChange={handleChange}
						disabled={!isEdit}
						error={error.login}
					/>
					<TextField
						label='Адрес'
						name='address'
						value={newUserData.address}
						type='address'
						onChange={handleChange}
						disabled={!isEdit}
					/>
					<TextField
						label='E-mail'
						name='email'
						value={newUserData.email}
						type='email'
						onChange={handleChange}
						disabled={!isEdit}
					/>
					<TextField
						label='Телефон'
						name='phone'
						value={newUserData.phone}
						type='phone'
						onChange={handleChange}
						disabled={!isEdit}
					/>
				</>
			)}
			{isLoading && 'Загрузка'}

			<div className={style.profile__button_container}>
				{isEdit ? (
					<>
						<button className='btn_design' onClick={handleSubmit}>
							Сохранить
						</button>
						<button className='btn_design' onClick={handleCancel}>
							Отмена
						</button>
					</>
				) : (
					<button className='btn_design' onClick={() => setEdit(true)}>
						Редактировать
					</button>
				)}
			</div>
		</div>
	)
}

export default Profile
