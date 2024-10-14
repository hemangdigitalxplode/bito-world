/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        className="fixed-top p-4 d-flex justify-content-center align-items-center"
        expand="lg"
      >
        <Container className="d-lg-flex">
          {/* Left Nav Links */}
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link href="#home" className="text-white">
              <GiHamburgerMenu size={30} />
            </Nav.Link>
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="text-white">
              Our Work
            </Nav.Link>
            <Nav.Link href="#services" className="text-white">
              Leadership
            </Nav.Link>
            <Nav.Link href="#services" className="text-white">
              BSIC
            </Nav.Link>
          </Nav>

          {/* Logo in the Middle */}
          <Navbar.Brand className="mx-auto">
            <img
              style={{ maxWidth: "70%" }}
              src={Logo}
              alt="Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Right Nav Links */}
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link href="#portfolio" className="text-white">
              Events
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Media
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              BITO Jobs
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Contact
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Membership
            </Nav.Link>
          </Nav>
        </Container>

        {/* Mobile Nav (hidden in desktop view) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav d-md-none" />
        <div className="d-md-none">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-lg-none">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link href="#portfolio" className="text-white">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
