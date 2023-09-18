import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/PaymentSuccess';
import Cart from '../pages/Cart';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment-success' element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;