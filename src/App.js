import './app.sass'
import { Route, Routes } from 'react-router-dom'
import Main from './layouts/main/main'
import Login from './layouts/authorization/authorization'
import Cart from './layouts/cart/cart'
import Header from './components/ui/header'
import { useState } from 'react'
import LoginPage from './components/page/login'
import RegistrationPage from './components/page/registration'
import ProductsListPage from './components/page/productList'
import ProductPage from './components/page/product'

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (val) => setSearch(val)

  return (
    <>
      <Header handleSearch={handleSearch} search={search} />
      <Routes>
        <Route path='' element={<Main search={search} />}>
          <Route path='' element={<ProductsListPage search={search} />} />
          <Route path='product'>
            <Route path=':id' element={<ProductPage />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />}>
          <Route path='' element={<LoginPage />} />
          <Route path='registrtion' element={<RegistrationPage />} />
        </Route>
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
