import React from 'react';

function Contact() {
    return (
        <div>
        <div className="split contactright">
          <h5>Address</h5>
          <h6>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</h6>
          <h5>Let's talk</h5>
          <h6>+254727000000</h6>
          <h5>General Support</h5>
          <h6>contact@example.com</h6>
        </div>
            <div className="login-wrapper">
                <form className="form-wrapper">
                    <h1>Get In Touch With Us</h1>
    <div className="firstname">
        <label htmlFor="name"> First Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="lastname">
        <label htmlFor="name"> Last Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="email">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="phonenumber">
        <label htmlFor="number"> Phone number</label>
        <input type="number" className="form-control" /* make it a valid phone numder with 10 digits and without the arrow thing */ />
    </div> 
    <div className="message">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="contactbutton">Submit</button>
</form>
		</div>
        </div>
            
    )
}

export default Contact;
