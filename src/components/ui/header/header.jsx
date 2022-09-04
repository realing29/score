import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo-container">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">Корзина</NavLink>
          </li>
        </ul>
      </nav>
      <div className="signIn">
        <NavLink to="/login/registrtion">Регистрация</NavLink>
        <NavLink exact to="/login">
          Вход
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
