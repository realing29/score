import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../common/form/textField'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../store/user'

const RegistrationPage = () => {
	const dispatch = useDispatch()
	const [data, setData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
		confirm: false,
	})

	const [errors, setErrors] = useState({})

	const validateShema = yup.object().shape({
		password: yup
			.string()
			.min(8, 'Минимум 8 символов')
			.required('Пароль обязателен для заполнения'),
		repeatPassword: yup
			.string()
			.test('equal', 'Пароли не совпадают', (value) => value === data.password)
			.required('Пароль обязателен для заполнения'),
		email: yup
			.string()
			.required('Электронная почта обязательна для заполнения')
			.email('Email введен не корректно'),
		confirm: yup
			.boolean()
			.test('true', 'Вы должны согласиться с правилами', (value) => value === true),
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

	const handleSubmit = async () => {
		const isValid = await validate()
		if (!isValid) return
		dispatch(signUp(data))
	}

	return (
		<>
			<h1>Регистрация</h1>
			<TextField label='Логин' value={data.email} name='email' onChange={handleChange} />
			<TextField
				label='Пароль'
				value={data.password}
				name='password'
				onChange={handleChange}
				type='password'
			/>
			<TextField
				label='Повторите пароль'
				value={data.repeatPassword}
				name='repeatPassword'
				onChange={handleChange}
				type='password'
			/>

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
			<button type='button' className='btn_design' onClick={handleSubmit}>
				Зарегистрироваться
			</button>
			<Link to='/login'>Войти</Link>
		</>
	)
}

export default RegistrationPage
