import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import ActiveLink from "../../Auth/ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  className="nav"  variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold">
            Car Corners
          </Navbar.Brand>
          <Navbar.Toggle
            className="text-white toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
            <Nav className="me-auto">
            <ActiveLink className="m-2 fw-bold" as={Link} to="/">
                  Home
                </ActiveLink>
            <ActiveLink className="m-2 fw-bold" as={Link} to="/blog">
                  Blogs
                </ActiveLink>
              {
                user?.email ? <>
                <ActiveLink className="m-2 fw-bold" as={Link} to="/manage-items">
                  Manage Items
                </ActiveLink>
                <ActiveLink className="m-2 fw-bold"  as={Link}  to="/add-items">
                Add Items
              </ActiveLink>
                
                <ActiveLink className="m-2 fw-bold" as={Link} to="/my-items">
                  My Items
                </ActiveLink>
                
                </> : ' '
              }
            </Nav>
            <Nav>
              {user?.email ? (
                <>
                
                  <img
                    className="m-auto rounded-circle profile"
                    width={50}
                    
                    src={user?.photoURL}
                    alt=""
                  />
               
                  <button
                    className="pt-0 fw-bold ms-2 btn border-0 text-dark"
                    onClick={logout}
                  >
                    Log Out
                  </button>{" "}
                </>
              ) : (
                <Nav.Link as={Link} className="m-2 fw-bold text-dark" to="/signin">
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
