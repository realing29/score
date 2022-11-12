import { Outlet } from 'react-router-dom'

import style from './authorization.module.sass'

const Login = () => {
  return (
    <div className={style.authLayout}>
      <Outlet />
    </div>
  )
}

export default Login
