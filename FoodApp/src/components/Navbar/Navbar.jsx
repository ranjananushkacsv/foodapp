import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";

import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>

      <div className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "menu active" : "menu"}
        >
          Home
        </Link>
        <Link
          to="/menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "menu active" : "menu"}
        >
          Menu
        </Link>
        <Link
          to="/contact"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "menu active" : "menu"}
        >
          Contact Us
        </Link>
      </div>

      <div className="navbar-right">
        <div className="basket-dot">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
