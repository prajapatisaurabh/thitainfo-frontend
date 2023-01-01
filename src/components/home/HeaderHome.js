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
    { to: "/about", text: "About" },
    { to: "/service", text: "Services" },
    { to: "/team", text: "Team" },
    { to: "/pricing", text: "Pricing" },
    { to: "/blog", text: "Blog" },
    { to: "/Articles", text: "Interview Preparation" },
  ];
  const createNavItem = ({ to, text }) => (
    <NavItem>
      <NavLink key={to} tag={Link} to={to}>
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

    // <header id="header" className="d-flex align-items-center">
    //   <div className="container d-flex justify-content-between align-items-center">
    //     <div className="logo">
    //       <h1>
    //         <Link to="/">thita info</Link>
    //       </h1>
    //     </div>

    //     <nav id="navbar" className="navbar">
    //       <ul>
    //         <li>
    //           <Link to="/" className="active">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/service">Services</Link>
    //         </li>
    //         {/* <li>
    //           <Link to="/portfolio">Resume</Link>
    //         </li> */}
    //         <li>
    //           <Link to="/team">Team</Link>
    //         </li>
    //         {/* <li>
    //           <Link to="/pricing">Pricing</Link>
    //         </li> */}
    //         <li>
    //           <Link to="/blog">Blog</Link>
    //         </li>
    //         <li>
    //           <Link to="/Articles">Interview Preparation</Link>
    //         </li>
    //         {/* <li className="dropdown">
    //           <a href="/javaArticle">
    //             <span>Interview Preparation</span>{" "}
    //             <i className="bi bi-chevron-down"></i>
    //           </a>
    //           <ul>
    //             <li>
    //               <Link to="/javaArticle">100 Java Interview Question</Link>
    //             </li>

    //             <li>
    //               <Link to="/python100">100 Python Interview Question</Link>
    //             </li>
    //           </ul>
    //         </li> */}
    //       </ul>
    //       <i className="bi bi-list mobile-nav-toggle"></i>
    //     </nav>
    //   </div>
    // </header>)
  );
};

export default HeaderHome;
