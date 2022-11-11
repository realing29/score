import { useState } from "react"
import TextField from "../../common/form/textField"
import style from "./style.module.sass"

const RegistrationPage = () => {
  const [data, setData] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  })

  const handleChange = ({ name, value }) => {
    setData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className={style.registration}>
      <form className={style.registration__form}>
        <h1>Регистрация</h1>
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

        <label htmlFor="remember">
          <input type="checkbox" name="remember" id="remember" />
          Принимаю пользовательское соглашение
        </label>
        <br />
        <button className={style.registration__submit} type="button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default RegistrationPage
