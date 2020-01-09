import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/client/Navbar/navbar';
import home from './components/client/Home/home';
import cover from './components/client/Cover/cover';
import Products from './components/client/Shop/products';
import About from './components/client/About/about';
import Login from './components/client/Login/login';
import Signup from './components/client/Signup/signup';
import Mobilephones from './components/client/Shop/mobilephones';
import Clothes from './components/client/Shop/clothes';
import Laptops from './components/client/Shop/laptops';
import Contact from './components/client/Contact/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path = "/" component={cover}/>
          <Route path = "/home" component={home}/>
          <Route path = "/about" component={About}/>
          <Route path = "/products" component={Products}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/signup" component={Signup}/>
          <Route path = "/mobilephones" component={Mobilephones}/>
          <Route path = "/clothes" component={Clothes}/>
          <Route path = "/laptops" component={Laptops}/>
          <Route path = "/contact" component={Contact}/>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App;


