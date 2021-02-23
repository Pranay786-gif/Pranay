import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';




function App() {
  return (
    <div className="background">
    
    <div className="App">
    

    <ReactBootStrap.Navbar bg="primary" expand="lg">

      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/contact">Contect Us</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/about">About Us</ReactBootStrap.Nav.Link>


        </ReactBootStrap.Nav>

      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
    <BrowserRouter>
  <div className= "container">
  <Switch>
  <Route exact path= "/" component={Home} />
  <Route  path= "/contact" component={Contact} />
  <Route  path= "/about" component={About} />
  </Switch>
  </div>
  </BrowserRouter>
  <ReactBootStrap.Image src="img.jpg" width= "300%" height="300%" fluid />


  </div>

    </div>

   


  );



};

export default App;
