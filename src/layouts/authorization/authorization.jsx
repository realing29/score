import { Outlet } from "react-router-dom"

import "./authorization.css"

const Login = () => {
  return (
    <div className="authLayout">
      <Outlet />
    </div>
  )
}

export default Login
