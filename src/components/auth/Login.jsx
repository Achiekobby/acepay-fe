import React from "react";
import BgImage from "../../assets/auth_bg_image.jpeg";
import "../../scss/authentication/login.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiInfo } from "react-icons/fi";

const Login = () => {
  return (
    <div className="login">
      <div className="background_img">
        <img src={BgImage} alt="background_img" />
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="heading">Login</div>
          <div className="topline">
            New to AcePay? <span>Create an Account</span>
          </div>
          <div className="forms">
            <form>
              <div className="input_field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="input_field">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="********" name="password" />
              </div>
              <div className="extra_inputs">
                <div className="remember">
                  <input type="checkbox" name="rememberMe" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <div className="forgotPassword">
                  <Link to="/">Forgot Password?</Link>
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Login
              </button>
              <div className="social_login">
                <Link className="social" to="/">
                  <FcGoogle className="google" /> <span>Login with Google</span>
                </Link>
              </div>
              <div className="closing">
                <FiInfo className="info" />
                <p>
                  Check our updated <span>Terms and conditions</span>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
