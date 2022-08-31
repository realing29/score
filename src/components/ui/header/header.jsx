import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div>logo</div>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/cart">Корзина</Link>
          </li>
          <li>
            <Link to="/login">Авторизация</Link>
          </li>
        </ul>
      </nav>
      <div className="signIn">
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </div>
  );
};

export default Header;
