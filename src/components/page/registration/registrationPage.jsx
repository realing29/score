import { useState } from "react";
import TextField from "../../common/form/textField";

const RegistrationPage = () => {
  const [data, setData] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = ({ name, value }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form>
        <TextField
          label="Логин"
          value={data.login}
          name="login"
          onChange={handleChange}
        />
        <TextField
          label="Пароль"
          value={data.password}
          name="password"
          onChange={handleChange}
          type="password"
        />
        <TextField
          label="Повторите пароль"
          value={data.repeatPassword}
          name="repeatPassword"
          onChange={handleChange}
          type="password"
        />
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Принимаю пользовательское соглашение</label>
        <br />
        <button type="button">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
