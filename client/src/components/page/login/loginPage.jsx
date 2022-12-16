import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '../../common/form/textField'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/user'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [data, setData] = useState({
		login: '',
		password: '',
		remember: false,
	})
	const [errors, setErrors] = useState({})

	const validateShema = yup.object().shape({
		password: yup
			.string()
			.required('Пароль обязателен для заполнения')
			.min(4, 'Минимальная длина 4 символа'),
		login: yup
			.string()
			.required('Логин обязателен для заполнения')
			.min(4, 'Минимальная длина 4 символа'),
	})

	const validate = async () => {
		try {
			await validateShema.validate(data)
			setErrors({})
			return true
		} catch (err) {
			setErrors({ [err.path]: err.message })
			return false
		}
	}

	const handleChange = ({ name, value }) => {
		setData((prev) => ({ ...prev, [name]: value }))
	}

	useEffect(() => {
		validate()
	}, [data])

	const handleSubmit = async () => {
		const isValid = await validate()
		if (!isValid) return
		try {
			await dispatch(login(data))
			navigate('/')
		} catch (error) {
			const { message } = error?.response?.data?.error
			if (message === 'LOGIN_NOT_FOUND') {
				setErrors({ login: 'Логин не найден' })
			} else if (message === 'INVALID_PASSWORD') {
				setErrors({ password: 'Неправильный пароль' })
			} else {
				console.error(error)
			}
		}
	}

	return (
		<>
			<h1>Авторизация</h1>
			<TextField
				label='Логин'
				value={data.login}
				name='login'
				onChange={handleChange}
				error={errors.login}
			/>
			<TextField
				label='Пароль'
				value={data.password}
				name='password'
				onChange={handleChange}
				type='password'
				error={errors.password}
			/>

			<label htmlFor='remember'>
				<input
					type='checkbox'
					name='remember'
					id='remember'
					onChange={({ target }) => {
						handleChange({ name: target.name, value: target.checked })
					}}
					value='remember'
					checked={data.remember}
				/>
				Оставаться в системе
			</label>
			<button type='button' className='btn_design' onClick={handleSubmit}>
				Войти
			</button>
			<Link to='registration'>Зарегистрироваться</Link>
		</>
	)
}

export default LoginPage
