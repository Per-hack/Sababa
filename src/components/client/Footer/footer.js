import React from 'react';

export default function footer() {
    return (
        <footer>
        <div className="footer" id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
               
                <ul>
                <li> <a href="#"> About Sababa</a> </li>
                  <li> <a href="#"> SignUp to Deliver </a> </li> 
                  <li> <a href="#"> SignUp to become a Vendor</a> </li>
                </ul>
              </div>
              <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                
                <ul>
                <li> <a href="#"> Get help </a> </li>
                  <li> <a href="#"> FAQs </a> </li>
                  <li> <a href="#"> Vendors near me </a> </li>
                  <li> <a href="#"> English </a> </li>
                </ul>
              </div>
                <ul className="social">
                  <li> <a href="#"> <i className=" fa fa-facebook"> &nbsp; </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-twitter"> &nbsp; </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-google-plus"> &nbsp; </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-instagram"> &nbsp; </i> </a> </li>
                  
                </ul>
              </div>
            </div>
            
          </div>
      </footer>
    )
}
