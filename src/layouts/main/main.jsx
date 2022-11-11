import { Outlet } from 'react-router-dom'
import './main.css'

const Main = () => {
  return (
    <div className='main-container'>
      <Outlet />
    </div>
  )
}

export default Main
