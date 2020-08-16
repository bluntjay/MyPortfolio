import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './component.css';

const NavBar = () => (
  <Nav>
    <Navbar bg="dark" fixed="top" variant="dark" className="navigationBar">
      <Nav.Link className="navLinks" href="#about">
        About
      </Nav.Link>
      <Nav.Link className="navLinks" href="#projects">
        Projects
      </Nav.Link>
      <Nav.Link className="navLinks" href="#myProfile">
        Profile
      </Nav.Link>
      <Nav.Link className="navLinks" href="#myDesigns">
        Designs
      </Nav.Link>
      <Nav.Link className="navLinks" href="#skills">
        Skills
      </Nav.Link>
      <Nav.Link className="navLinks" href="#contact">
        Contact
      </Nav.Link>
    </Navbar>
  </Nav>
);

export default NavBar;
