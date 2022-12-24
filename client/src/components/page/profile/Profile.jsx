import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import useErrorToastify from '../../../hooks/useErrorToastify'
import { getUser, userUpdateState } from '../../../store/user'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../../store/userApi'
import TextField from '../../common/form/textField'
import style from './profile.module.sass'
import ProfileLoader from './profileLoader'
import * as yup from 'yup'
import Error from '../../common/error'
import Button from '../../common/button'

const Profile = () => {
	const dispatch = useDispatch()
	const user = useSelector(getUser())
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const isLoggedIn = Boolean(Object.keys(user).length)
		if (!isLoggedIn) {
			navigate('/login', {
				state: { from: location },
			})
		}
	}, [])

	const [isEdit, setEdit] = useState(false)
	const [newUserData, setNewUserData] = useState({
		_id: '',
		login: '',
		address: '',
		email: '',
		phone: '',
	})
	const { data, isSuccess, isLoading, isError } = useGetUserByIdQuery(user.userId)

	const [error, setError] = useState({ login: null, phone: null, email: null })
	const isErorrValidate = Boolean(Object.keys(error).length)
	const validateShema = yup.object().shape({
		phone: yup.string().matches(/^(\+7|8)\d{10}$/, {
			message: 'укажите мобильный телефон, в формате - +7/8*',
			excludeEmptyString: true,
		}),
		email: yup.string().email('укажите e-mail, в формате - *@*.*'),
	})

	const validate = async () => {
		try {
			await validateShema.validate(newUserData)
			setError({})
			return true
		} catch (err) {
			setError({ [err.path]: err.message })
			return false
		}
	}
	useEffect(() => {
		if (!isSuccess) return
		validate()
	}, [newUserData])

	const [updateUser, updateUserResult] = useUpdateUserMutation()

	useEffect(() => {
		if (isSuccess) setNewUserData((prev) => ({ ...prev, ...data }))
	}, [isSuccess, data])

	const handleCancel = () => {
		setEdit(false)
	}

	useEffect(() => {
		if (updateUserResult?.error?.data?.message === 'Duplicate login') {
			setError({ login: 'Логин уже занят' })
			setEdit(true)
		} else if (updateUserResult?.isSuccess) {
			setEdit(false)
			setError({})
			dispatch(userUpdateState(newUserData))
		}
	}, [updateUserResult])

	const handleSubmit = async () => {
		const isValid = await validate()
		if (!isValid) return
		updateUser(newUserData)
	}

	const handleChange = ({ name, value }) => {
		setNewUserData((prev) => ({ ...prev, [name]: value }))
	}

	const styleLoad = updateUserResult.isLoading ? 'load' : ''

	useErrorToastify(updateUserResult.isError)

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
						error={error.email}
					/>
					<TextField
						label='Телефон'
						name='phone'
						value={newUserData.phone}
						type='phone'
						onChange={handleChange}
						disabled={!isEdit}
						error={error.phone}
					/>
				</>
			)}
			{isLoading && <ProfileLoader count={5} />}
			{isError && <Error />}
			<div className={style.profile__button_container}>
				{isEdit ? (
					<>
						<Button
							className={styleLoad}
							onClick={handleSubmit}
							disabled={isErorrValidate}
						>
							Сохранить
						</Button>
						<Button onClick={handleCancel}>Отмена</Button>
					</>
				) : (
					<Button onClick={() => setEdit(true)}>Редактировать</Button>
				)}
			</div>
		</div>
	)
}

export default Profile
