import { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" && menu === "menu") {
      const exploreSection = document.getElementById("explore-menu");
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname, menu]);

  const handleMenuClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToExplore: true } });
    } else {
      const exploreSection = document.getElementById("explore-menu");
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenu("menu");
  };

  useEffect(() => {
    if (location.state?.scrollToExplore) {
      const exploreSection = document.getElementById("explore-menu");
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div className='navbar'>
      <Link to='/'> <img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <li onClick={handleMenuClick} className={menu === "menu" ? "active" : ""}>Menu</li>
        <a href="#footer"><li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</li></a>
      </ul>
      <div className="navbar-right">
        <div className="basket-dot">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;