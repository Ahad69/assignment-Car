import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#features">Features</Nav.Link>
              <Nav.Link className="text-white" href="#pricing">Pricing</Nav.Link>

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
