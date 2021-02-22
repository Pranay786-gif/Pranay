import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
const Contact=()=>{
    return (
        <div className="app">
        <h2> Email: pranaydwivedi231@gmail.com</h2>
        <h2> mob no. 6392140752</h2>
        <ReactBootStrap.Form>
        <ReactBootStrap.Form.Group controlId="formBasicEmail">
          <ReactBootStrap.Form.Label>Name</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control type="email" placeholder="Enter Your Name" />
          <ReactBootStrap.Form.Text className="text-muted">
            
          </ReactBootStrap.Form.Text>
        </ReactBootStrap.Form.Group>
      
        <ReactBootStrap.Form.Group controlId="formBasicPassword">
          <ReactBootStrap.Form.Label>Email Address</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control type="password" placeholder="Enter Your Email Address" />
        </ReactBootStrap.Form.Group>
        <textarea name="message" placeholder="message" rows="5" cols="50"></textarea>
        <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
          <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Button variant="primary" type="submit">
          Submit
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>
            <h2>
            <Link to= {"/"}> Home</Link>
            </h2>
        </div>
    )

}
export default Contact;