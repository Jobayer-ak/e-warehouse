import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="home/products">PRODUCTS</Nav.Link>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
