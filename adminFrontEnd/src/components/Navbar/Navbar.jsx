import { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const location = useLocation();
  const navigate = useNavigate();

  // Fixing the logout function - it was being called immediately
  const logout = () => {
    localStorage.removeItem('token'); // Fixed to remove 'token', not the token value
    setToken("");
    navigate("/");
  };

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
        {!token
          ? <button onClick={() => setShowLogin(true)}>Sign Up</button>
          : <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
            <Link to="/myorders"><li><img src={assets.bag_icon} alt="" /><p>Orders</p></li></Link>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default Navbar;