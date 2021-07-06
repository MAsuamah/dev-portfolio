import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../assets/styles/Navigation.css'


function Navigation() {

/*   const { currentlySelected, setCurrentlySelected } = props; */

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="my-name" href="#home">Michelle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto options">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Resume</Nav.Link>
            <Nav.Link href="#resume">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;