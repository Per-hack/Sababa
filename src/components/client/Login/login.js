import React from 'react';
import { Link } from "react-router-dom";



function Login() {
    return (
      <div className="login-wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form>
        <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email"
                     className=""
                     placeholder="Email Account"
                     type="text"
                     name="email"/>

            </div>
            <div className="password">
              <label htmlFor="phone">Password</label>
              <input type="password"
                     className=""
                     placeholder="Password"
                     type="text"
                     name="password"/>

            </div>
         </form>
          <a href="/products">
            <button>Log In</button> 
            <a href="#"><small>Forgot Password?</small></a>
          </a>     
          <p className="snup">
            Don't have an account?<Link to="/signup"> Signup</Link>
          </p>
          <div className="loginwith d-flex p-2">
            <span>
              <img src="/" alt="google" align="left" />
            </span>
            {"  "}
            <p>
              <strong>Sign in with google</strong>
            </p>
          </div>
    </div>
    </div>
    )
}

export default Login;
