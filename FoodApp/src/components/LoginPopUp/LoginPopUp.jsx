import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Sign Up");

  return (
    <div className="login-popup" onClick={() => setShowLogin(false)}>
      <form className="login-popup-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {curState === "Sign Up" && <input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">{curState === "Sign Up" ? "Create Account" : "Log In"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>{curState === "Sign Up" ? "I agree to the Terms & Conditions" : "Remember Me"}</p>
        </div>

        <p className="toggle-form">
          {curState === "Sign Up" ? (
            <>
              Already have an account? <span onClick={() => setCurState("Log In")}>Log In</span>
            </>
          ) : (
            <>
              Don't have an account? <span onClick={() => setCurState("Sign Up")}>Sign Up</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopUp;
