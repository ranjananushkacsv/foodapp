import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo_bottom} alt="" />
          <p>Food Prep is a full-stack project designed for hands-on teaching, helping students learn full-stack development. It's used by FACEPrep, an ed-tech company focused on equipping students with the skills to achieve their career aspirations.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-content-right">
        <h2>Get in Touch</h2>
          <ul>
            <li>+91 1800 1800 000</li>
            <li>abcd@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © 2021 FoodPrep. All rights reserved.</p>
    </div>
  )
}

export default Footer