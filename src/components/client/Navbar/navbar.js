import React, {useState, useEffect} from 'react';
import Logo from "../../../assets/img/saaba.png";
import { NavLink } from 'react-router-dom';
import Cart from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {BrowserRouter as Router} from "react-router-dom"

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

const Navbar = () => {
  const [cartItems, setcart] = useState([]);
    useEffect(() => {
      axios
        .post('/getcart')
        .then(res => setcart([...res.data]))
        .catch(err => console.log(err));
    }, []);

  return (
		  <nav className="navbar navbar-expand-md navbar-dark bg-yellow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img style = {{height:"50px" ,width:"100px"}}src ={Logo}/>
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="/shop">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li> 
          <li className='nav-item'>
          
            <Router>
            <NavLink to='/cart' className='nav-link'>
              <IconButton aria-label="cart">
                <StyledBadge
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  badgeContent={cartItems.length > 0 ? cartItems.length : '2'}
                  color='secondary'
                >
                  <Cart color='secondary' />
                </StyledBadge>
              </IconButton>
            </NavLink>
            </Router>
           
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
