import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../common/form/textField'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/user'

const LoginPage = () => {
	const dispatch = useDispatch()
	const [data, setData] = useState({
		email: '',
		password: '',
		remember: false,
	})
	const [errors, setErrors] = useState({})

	const validateShema = yup.object().shape({
		password: yup.string().required('Пароль обязателен для заполнения'),
		email: yup
			.string()
			.required('Электронная почта обязательна для заполнения')
			.email('Email введен не корректно'),
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
		dispatch(login(data))
	}

	return (
		<>
			<h1>Авторизация</h1>
			<TextField label='Логин' value={data.email} name='email' onChange={handleChange} />
			<TextField
				label='Пароль'
				value={data.password}
				name='password'
				onChange={handleChange}
				type='password'
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
