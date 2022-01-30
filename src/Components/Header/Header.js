import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../src/images/Logo/logo-sm.png";
import "./Header.css";

const Header = () => {

  const activeStyle = {
    color: "#07A5E2",
    fontWeight: 500,
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          {" "}
          <img src={logo} alt="logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link activeStyle={activeStyle} as={NavLink} to="/services">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
