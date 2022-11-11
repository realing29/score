import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Search from "../search";
import "./header.css";

const Header = ({ handleSearch, search }) => {
  return (
    <div className="headerContainer">
      <div className="logo-container">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <Search handleSearch={handleSearch} search={search} />
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Корзина</NavLink>
          </li>
        </ul>
      </nav>
      <div className="signIn">
        <NavLink to="/login/registrtion">Регистрация</NavLink>
        <NavLink to="/login">Вход</NavLink>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func,
  search: PropTypes.string,
};

export default Header;
