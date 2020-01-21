import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
        
            <div className="firstname">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="firstname"
              />
            </div>

            {<div className="lastname">
              <label htmlFor="lastname">Last Name</label>
              <input type="text"
                     className=""
                     placeholder="Last Name"
                     name="Lastname"/>

            </div> }
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className=""
                placeholder="Email Account"
                name="email"
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className=""
                placeholder="Phone Number"
                name="phone"
              />
            </div>
            <div className="password">
              <label htmlFor="phone">Password</label>
              <input
                type="password"
                className=""
                placeholder="Password"
                name="password"
              />
            </div>
            {/* <div className="passcode">
              <label htmlFor="phone">Re- Password</label>
              <input type="text"
                     className=""
                     placeholder="Password"
                     type="number"
                     name="passcode"/>


<form>
            <div className="role-dropdown">
              <label>Who do you want to be?</label>
              <select name="role">
                <option value="buyer/customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="courier">Courier</option>
              </select>
            </div>
            </form>
            </div> */}
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <p className="snup">
            <input type="checkbox" /> By checking this box you are agreeing to
            our <Link to="/Terms and conditions.">Terms and conditions.</Link>{" "}
          </p>
              <small>Already Have an Account?</small>
              <button>Login</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Signup;
