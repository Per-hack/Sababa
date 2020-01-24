import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/client/Navbar/navbar';
import home from './components/client/Home/home';
import Cart from './components/client/Cart/Cart';
import cover from './components/client/Cover/cover';
import About from './components/client/About/about';
import Login from './components/client/Login/login';
import Signup from './components/client/Signup/signup';
import Contact from './components/client/Contact/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path = "/" component={cover}/>
          <Route path = "/home" component={home}/>
          <Route path = "/cart" component={Cart}/>
          <Route path = "/about" component={About}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/signup" component={Signup}/>
          <Route path = "/contact" component={Contact}/>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App;


