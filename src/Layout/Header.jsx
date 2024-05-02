import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaUserCircle /> User
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="shop">
          <PiFinnTheHumanFill /> People
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
