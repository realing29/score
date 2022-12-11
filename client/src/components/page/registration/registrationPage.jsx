import { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../common/form/textField'

const RegistrationPage = () => {
	const [data, setData] = useState({
		login: '',
		password: '',
		repeatPassword: '',
	})

	const handleChange = ({ name, value }) => {
		setData((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<>
			<h1>Регистрация</h1>
			<TextField label='Логин' value={data.login} name='login' onChange={handleChange} />
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

			<label htmlFor='remember'>
				<input type='checkbox' name='remember' id='remember' />
				Принимаю пользовательское соглашение
			</label>
			<button type='button' className='btn_design'>
				Зарегистрироваться
			</button>
			<Link to='/login'>Войти</Link>
		</>
	)
}

export default RegistrationPage
