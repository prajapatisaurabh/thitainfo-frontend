import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="bg-light">
      <Navbar expand="md">
        <NavbarBrand className="fw-bold" tag={Link} to="/">
          THITA INFO
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar></Nav>
          <Nav>
            <NavItem className="pe-2">
              <Button outline>Login</Button>
            </NavItem>
            <NavItem>
              <Button color="success" outline>
                SignIn
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
