import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3">
          <Container>
            <Navbar.Brand href="#">WAREHOUSE</Navbar.Brand>
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
                  <Nav.Link href="#action2">PRODUCTS</Nav.Link>
                  <Nav.Link href="#action3">BLOG</Nav.Link>
                  <Nav.Link href="#action4">ABOUT</Nav.Link>
                  <Nav.Link href="#action5">CONTACT</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
