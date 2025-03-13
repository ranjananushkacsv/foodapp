import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <Outlet /> 
    </>
  );
};

export default Navbar;