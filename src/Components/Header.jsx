/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  return (
    <>
    {/* Desktop Navbar */}
    <Navbar
      style={{ zIndex: '9' }}
      className="p-4 d-flex justify-content-center align-items-center"
      expand="lg"
    >
      <Container className="d-none d-lg-flex">
        {/* Left Nav Links (Desktop Only) */}
        <Nav className="me-auto d-none d-lg-flex">
          <Nav.Link href="#home" className="text-white">
            <GiHamburgerMenu size={30} />
          </Nav.Link>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
          </Link>
          <Nav.Link href="#about" className="text-white">About</Nav.Link>
          <Nav.Link href="#services" className="text-white">Our Work</Nav.Link>
          <Nav.Link href="#leadership" className="text-white">Leadership</Nav.Link>
          <Nav.Link href="#bsic" className="text-white">BSIC</Nav.Link>
        </Nav>

        {/* Logo in the Middle */}
        <Link to="/">
          <Navbar.Brand className="mx-auto">
            <img
              style={{ maxWidth: "70%" }}
              src={Logo}
              alt="Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>

        {/* Right Nav Links (Desktop Only) */}
        <Nav className="ms-auto d-none d-lg-flex">
          <Nav.Link href="#events" className="text-white">Events</Nav.Link>
          <Nav.Link href="#media" className="text-white">Media</Nav.Link>
          <Nav.Link href="#jobs" className="text-white">BITO Jobs</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>

          <Link to="/membership" style={{ textDecoration: 'none' }}>
            <Nav.Link href="/membership" className="text-white">
              Membership
            </Nav.Link>
          </Link>
        </Nav>
      </Container>

      {/* Mobile View: Logo on the Left and Toggle Button on the Right */}
      <div className="d-flex d-lg-none w-100 justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
        </Link>
        <GiHamburgerMenu size={30} onClick={handleShow} style={{ cursor: 'pointer', color: 'white' }} />
      </div>
    </Navbar>

    {/* Offcanvas Drawer (Mobile Only) */}
    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>BITO</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link href="#home" className="text-dark" onClick={handleClose}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-dark" onClick={handleClose}>
            About
          </Nav.Link>
          <Nav.Link href="#services" className="text-dark" onClick={handleClose}>
            Our Work
          </Nav.Link>
          <Nav.Link href="#leadership" className="text-dark" onClick={handleClose}>
            Leadership
          </Nav.Link>
          <Nav.Link href="#bsic" className="text-dark" onClick={handleClose}>
            BSIC
          </Nav.Link>
          <Nav.Link href="#events" className="text-dark" onClick={handleClose}>
            Events
          </Nav.Link>
          <Nav.Link href="#media" className="text-dark" onClick={handleClose}>
            Media
          </Nav.Link>
          <Nav.Link href="#jobs" className="text-dark" onClick={handleClose}>
            BITO Jobs
          </Nav.Link>
          <Nav.Link href="#contact" className="text-dark" onClick={handleClose}>
            Contact
          </Nav.Link>
          <Link to="/membership" style={{ textDecoration: 'none' }}>
            <Nav.Link href="/membership" className="text-dark" onClick={handleClose}>
              Membership
            </Nav.Link>
          </Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  );
};

export default Header;
