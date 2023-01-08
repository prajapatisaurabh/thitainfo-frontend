import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const links = [
    { to: "/about", text: "About", id: 11110 },
    { to: "/service", text: "Services", id: 11112 },
    { to: "/team", text: "Team", id: 1111 },
    { to: "/pricing", text: "Pricing", id: 11113 },
    { to: "/blog", text: "Blog", id: 11114 },
    { to: "/Articles", text: "Interview Preparation", id: 11115 },
  ];
  const createNavItem = ({ to, text, id }) => (
    <NavItem key={id.toString()}>
      <NavLink tag={Link} to={to}>
        {text}
      </NavLink>
    </NavItem>
  );
  return (
    <Container>
      <Navbar expand="md">
        <NavbarBrand tag={Link} to="/" className="fw-bold me-1">
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" fill>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default HeaderHome;
