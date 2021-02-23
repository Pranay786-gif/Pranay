import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const Contact = () => {
  return (
    <div className="app">
      <div >
        <Container>
        <Row>
        <Col xs={12} md={8} className="contact">
         Email: pranaydwivedi231@gmail.com
        </Col>
        <Col xs={6} md={4} className="contact">
         Tel No: 6392140752
        </Col>
      </Row>
        </Container>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="form">
        <ReactBootStrap.Form>
          <ReactBootStrap.Form.Group controlId="formBasicEmail">
            <ReactBootStrap.Form.Label rows="5" cols="30">Name</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="email" placeholder="Enter Your Name" />
            <ReactBootStrap.Form.Text className="text-muted">

            </ReactBootStrap.Form.Text>
          </ReactBootStrap.Form.Group>

          <ReactBootStrap.Form.Group controlId="formBasicPassword">
            <ReactBootStrap.Form.Label>Email Address</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control type="password" placeholder="Enter Your Email Address" />
          </ReactBootStrap.Form.Group>
          <textarea name="message" placeholder="message" rows="5" cols="30"></textarea>
          <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
            <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
          </ReactBootStrap.Form.Group>
          <ReactBootStrap.Button variant="primary" type="submit">
            Submit
        </ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </div>


      <h2>
        <Link to={"/"}> Home</Link>
      </h2>
    </div>
  )

}
export default Contact;