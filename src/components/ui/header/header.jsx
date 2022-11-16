import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Search from '../search'
import style from './header.module.sass'

const Header = ({ handleSearch, search }) => {
  return (
    <div className={style.headerContainer}>
      <div className={style.logo_container}>
        <img src='/logo.jpg' alt='logo' />
      </div>
      <Search handleSearch={handleSearch} search={search} />
      <nav>
        <ul className={style.nav}>
          <li>
            <NavLink to='/'>Главная</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Корзина</NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.signIn}>
        <NavLink to='/login'>Войти</NavLink>
      </div>
    </div>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func,
  search: PropTypes.string,
}

export default Header
