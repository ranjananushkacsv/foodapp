import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './screens/Add/Add'
import List from './screens/List/List'
import Orders from './screens/Orders/Orders'
import {Routes, Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Add />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/orders' element={<Orders />}></Route>

        </Routes>

      </div>
    </div>
  )
}

export default App