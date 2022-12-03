import { Outlet } from 'react-router-dom'
import style from './main.module.sass'

const Main = () => {
	return (
		<div className={style.main_container}>
			<Outlet />
		</div>
	)
}

export default Main
