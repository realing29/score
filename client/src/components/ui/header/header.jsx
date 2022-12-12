import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Search from '../search'
import style from './header.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from '../../../store/user'
import ProfileIco from '../profileIco'
import { useNavigate } from 'react-router-dom'

const Header = ({ handleSearch, search }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { email } = useSelector(getUser())
	function handleLogout() {
		dispatch(logout())
		navigate('/')
	}

	const isActive = ({ isActive }) => (isActive ? style.selected : '')

	return (
		<div className={style.headerContainer}>
			<div className={style.logo_container}>
				<img src='/logo.jpg' alt='logo' />
			</div>
			<Search handleSearch={handleSearch} search={search} />
			<nav>
				<ul className={style.nav}>
					<li>
						<NavLink to='/' className={isActive}>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink to='/cart' className={isActive}>
							Корзина
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className={style.signIn}>
				{email ? (
					<>
						<NavLink to='/profile' className={isActive}>
							{email.split('@')[0]}
						</NavLink>
						<div className={style.block}>
							<ProfileIco />
						</div>
						<div className={style.block}>
							<button className={style.logout} onClick={handleLogout}>
								Выйти
							</button>
						</div>
					</>
				) : (
					<NavLink to='/login'>Войти</NavLink>
				)}
			</div>
		</div>
	)
}

Header.propTypes = {
	handleSearch: PropTypes.func,
	search: PropTypes.string,
}

export default Header
