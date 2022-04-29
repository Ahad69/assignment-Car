import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' className="fs-2">Car Corners</Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} className="text-white" to="/inventory">Inventory</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link className="text-white" href="#deets">More deets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
