import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    navigate("/" + value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand onClick={() => onUpdateActiveLink("")}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("service")}
            >
              Service
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("team")}
            >
              Team
            </Nav.Link>
            <NavDropdown title="Learn" id="basic-nav-dropdown">
              <NavDropdown.Item
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blog")}
              >
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("code")}
              >
                Code With Me
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Articles")}
              >
                Interview Preparation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          {/* <span className="navbar-text">
            <button className="vvd">
              <span>Login</span>
            </button>
          </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
