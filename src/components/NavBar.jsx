import React from "react";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className=" d-flex justify-content-around bg-secondary"
      >
        <Container className="me-auto">
          <div>
            {" "}
            <Link to={`/`}>
              <img src={Logo} alt="Imagen del Logo" className="logo p-0 mx-1" />
            </Link>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to={`/category/${"Business"}`}>Business</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/${"Classic"}`}>Classic</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/${"Platinum"}`}>Platinum</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/${"Serious"}`}>Serious</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div>
            <Link to={`/cart`}>
              <CartWidget />
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
