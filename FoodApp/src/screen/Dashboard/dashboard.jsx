import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <ul>
        
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>
      <Outlet /> 
    </div>
  );
};

export default Dashboard;