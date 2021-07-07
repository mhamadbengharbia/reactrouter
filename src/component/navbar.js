import { render } from '@testing-library/react';
import React , {Component} from 'react';
import Home from'./Home'
import Movies from'./movies'
import Series from'./series'

import {Navbar,Nav,NavDropdown,Container} from'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from "react-router-dom";

export default class Nav1 extends Component {
 render(){
return (
<Router>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to={Home}>Home</Nav.Link>
      <Nav.Link as={Link} to={Movies}>Movies</Nav.Link>
      <Nav.Link as={Link} to={Series}>Series</Nav.Link>
    </Nav>
    </Container>
    
  </Navbar>




</Router>
);
}}
 