import { Outlet } from 'react-router-dom'

import style from './authorization.module.sass'

const Login = () => {
	return (
		<div className={style.auth_layout}>
			<Outlet />
		</div>
	)
}

export default Login
