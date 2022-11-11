import { useState } from "react"
import TextField from "../../common/form/textField"

const LoginPage = () => {
  const [data, setData] = useState({
    login: "",
    password: "",
    remember: false,
  })

  const handleChange = ({ name, value }) => {
    setData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h1>Авторизация</h1>
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
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Оставаться в системе</label>
        <br />
        <button type="button">Войти</button>
      </form>
    </div>
  )
}

export default LoginPage
