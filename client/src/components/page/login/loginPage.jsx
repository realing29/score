import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TextField from '../../common/form/textField'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/user'
import Button from '../../common/button'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const [data, setData] = useState({
		login: '',
		password: '',
	})
	const [errors, setErrors] = useState({})

	const [isLoadStyle, setLoadStyle] = useState('')

	const [isValid, setValid] = useState(false)

	const validateShema = yup.object().shape({
		password: yup.string().required('Пароль обязателен для заполнения'),
		login: yup.string().required('Логин обязателен для заполнения'),
	})

	const validate = async () => {
		try {
			await validateShema.validate(data)
			setErrors({})
			setValid(true)
			return true
		} catch (err) {
			setErrors({ [err.path]: err.message })
			setValid(false)
			return false
		}
	}

	const handleChange = ({ name, value }) => {
		setData((prev) => ({ ...prev, [name]: value }))
	}

	useEffect(() => {
		validate()
	}, [data])

	const redirect = location.state ? location?.state?.from?.pathname : '/'

	const handleSubmit = async () => {
		if (!isValid) return
		try {
			setLoadStyle('load')
			await dispatch(login(data))
			navigate(redirect)
		} catch (error) {
			const { message } = error?.response?.data?.error
			if (message === 'LOGIN_NOT_FOUND') {
				setErrors({ login: 'Пользователя с таким логином не существует' })
			} else if (message === 'INVALID_PASSWORD') {
				setErrors({ password: 'Неправильный пароль' })
			} else {
				console.error(error)
			}
		} finally {
			setLoadStyle('')
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
				autoFocus
			/>
			<TextField
				label='Пароль'
				value={data.password}
				name='password'
				onChange={handleChange}
				type='password'
				error={errors.password}
			/>

			<Button
				type='button'
				className={isLoadStyle}
				onClick={handleSubmit}
				disabled={!isValid}
			>
				Войти
			</Button>
			<Link
				to='registration'
				state={location.state ? { from: location.state.from } : null}
			>
				Зарегистрироваться
			</Link>
		</>
	)
}

export default LoginPage
