import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import "./Header.css";

const Header = () => {
  // hooks
  const [user] = useAuthState(auth);

  // logout
  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <div className="header">
      {["lg"].map((expand) => (
        <Navbar key={expand} variant="dark" expand={expand}>
          <Container>
            <Navbar.Brand as={Link} to="/">
              e-WAREHOUSE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  WAREHOUSE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center me-auto flex-grow-1 pe-3">
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/products">PRODUCTS</Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    BLOG
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    CONTACT
                  </Nav.Link>
                </Nav>
                <Nav>
                  {user && (
                    <>
                      <Nav.Link className="me-1" as={Link} to="addproduct">
                        ADD
                      </Nav.Link>
                      <Nav.Link className="me-1" as={Link} to="update">
                        UPDATE
                      </Nav.Link>
                    </>
                  )}
                  {user ? (
                    <Button
                      onClick={handleLogOut}
                      className="btn btn-link py-0 py-0 text-white text-decoration-none">
                      Log Out
                    </Button>
                  ) : (
                    <>
                      <Nav.Link className="me-0" as={Link} to="/register">
                        REGISTER
                      </Nav.Link>
                      <Nav.Link as={Link} to="/login">
                        LOGIN
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
