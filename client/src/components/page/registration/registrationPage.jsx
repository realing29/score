import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TextField from '../../common/form/textField'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../store/user'
import style from './registrationPage.module.sass'

const RegistrationPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	const [data, setData] = useState({
		login: '',
		password: '',
		repeatPassword: '',
		confirm: false,
	})

	const [errors, setErrors] = useState({})

	const validateShema = yup.object().shape({
		confirm: yup
			.boolean()
			.test(
				'true',
				'Необходимо принять правила лицензионного соглашения',
				(value) => value === true,
			),
		repeatPassword: yup
			.string()
			.test('equal', 'Пароли не совпадают', (value) => value === data.password)
			.required('Пароль обязателен для заполнения'),
		password: yup
			.string()
			.min(4, 'Минимум 4 символов')
			.required('Пароль обязателен для заполнения'),
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
	useEffect(() => {
		validate()
	}, [data])

	const handleChange = ({ name, value }) => {
		setData((prev) => ({ ...prev, [name]: value }))
	}

	const redirect = location.state ? location?.state?.from?.pathname : '/'

	const handleSubmit = async () => {
		const isValid = await validate()
		if (!isValid) return
		try {
			await dispatch(signUp(data))
			navigate(redirect)
		} catch (error) {
			const { message } = error?.response?.data?.error
			if (message === 'LOGIN_EXISTS') {
				setErrors({ login: 'Пользователь с таким логином уже существует' })
			} else {
				console.error(error)
			}
		}
	}
	return (
		<>
			<h1>Регистрация</h1>
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
			<TextField
				label='Повторите пароль'
				value={data.repeatPassword}
				name='repeatPassword'
				onChange={handleChange}
				type='password'
				error={errors.repeatPassword}
			/>
			<div>
				<label htmlFor='confirm'>
					<input
						type='checkbox'
						name='confirm'
						id='confirm'
						value='confirm'
						checked={data.confirm}
						onChange={({ target }) => {
							handleChange({ name: target.name, value: target.checked })
						}}
					/>
					Принимаю пользовательское соглашение
				</label>
				{errors.confirm && <div className={style.confirm_error}>{errors.confirm}</div>}
			</div>
			<button type='button' className='btn_design' onClick={handleSubmit}>
				Зарегистрироваться
			</button>
			<Link to='/login' state={location.state ? { from: location.state.from } : null}>
				Войти
			</Link>
		</>
	)
}

export default RegistrationPage
