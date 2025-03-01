import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './screen/home/home'
import Cart from './screen/cart/cart'
import Order from './screen/placeorder/placeorder'

import { Routes,Route } from 'react-router-dom'
import "./App.css"
const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
    </div>
  )
}

export default App