import React from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

function About() {
  return (
    <div className="aboutus">
      <h1> Our Mission</h1>
     <p> To create an interactive social marketplace that you can rely on. </p>
      <h2>About Sababa</h2>
      <p>
        Sababa is a platform created to allow an at home user to be able to
        order groceries, or buy any form of produce in the comfort of their home
        or office or anywhere they are. We are linking buyers and sellers, to
        supermarkets, farmers markets, resturants, fast food outlets, fashion
        and clothing stores etc, where they can buy fish, eggs, vegetables,
        clothes among others.
      </p>
      <h2>Function</h2>
      <p>
        This app allows you to interact through orders, once you have either
        searched for you desired product or created your "shopping list", you
        can place an order, which is sent out to a courier who takes up the
        order and will deliver given a specific time frame. Users can track
        their order and rate the services they have recieved. As a user you have
        the choice to be any of the three roles provide in this app: A Customer,
        A Seller and A Courier. Depending on the role chosen you will get the
        desired formatt allowing you to perform the tasks available. The app
        allows you to recieve notifications based on your history of orders. You
        can watch the short video below to find out how the app functions.

        n/B/ add: Foodies can login and add their reviews about restaurants and food
        Business owners can list their restaurant on the website and add details such as address,
         menus, photos and lots more
      </p>
      <a href="/">
        <button> Watch Here</button>
      </a>
    </div>
  );
}

export default About;
