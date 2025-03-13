import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './screen/Home/Home'
import Cart from './screen/Cart/Cart'
import PlaceOrder from './screen/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useState } from 'react'


const App = () => {

  const[showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin&& <LoginPopUp setLogin={setShowLogin}/>}
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/order" element={<PlaceOrder/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
    

  )
}

export default App