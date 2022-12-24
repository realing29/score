import './app.sass'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './layouts/main/main'
import Login from './layouts/authorization/authorization'
import Cart from './layouts/cart/cart'
import Header from './components/ui/header'
import LoginPage from './components/page/login'
import RegistrationPage from './components/page/registration'
import ProductsListPage from './components/page/productList'
import ProductPage from './components/page/product'
import Profile from './components/page/profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/ui/footer'
import Terms from './components/page/terms'

function App() {
	return (
		<>
			<ToastContainer />
			<Header />
			<Routes>
				<Route path='' element={<Main />}>
					<Route path='' element={<ProductsListPage />} />
					<Route path='product'>
						<Route path=':id' element={<ProductPage />} />
					</Route>
				</Route>
				<Route path='login' element={<Login />}>
					<Route path='' element={<LoginPage />} />
					<Route path='registration' element={<RegistrationPage />} />
				</Route>
				<Route path='cart' element={<Cart />} />
				<Route path='profile' element={<Profile />} />
				<Route path='terms' element={<Terms />} />
				<Route path='*' element={<Navigate to={'/'} />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
