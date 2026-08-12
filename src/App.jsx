import React from 'react'
import { Routes, Route } from "react-router";
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './components/layout/MainLayout';
import Hw from './pages/Hw';
import Home from './pages/Home';
import Category from './pages/Category';
import Shop from './pages/Shop';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import About from './pages/About';
import Cart from './pages/Cart';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import Wishlist from './pages/Wishlist';


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/hw" element={<Hw />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


