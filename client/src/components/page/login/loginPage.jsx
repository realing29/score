import { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../common/form/textField'

const LoginPage = () => {
	const [data, setData] = useState({
		login: '',
		password: '',
		remember: false,
	})

	const handleChange = ({ name, value }) => {
		setData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => {
		console.log(data)
	}

	return (
		<>
			<h1>Авторизация</h1>
			<TextField label='Логин' value={data.login} name='login' onChange={handleChange} />
			<TextField
				label='Пароль'
				value={data.password}
				name='password'
				onChange={handleChange}
				type='password'
			/>

			<label htmlFor='remember'>
				<input type='checkbox' name='remember' id='remember' />
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
