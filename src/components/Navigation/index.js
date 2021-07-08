import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../assets/styles/Navigation.css'


function Navigation(props) {

  const tabs = ['About Me', 'Portfolio', 'Resume', 'Contact'];

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="my-name" onClick={() => props.handlePageChange('About Me')}>Michelle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto options">
            {tabs.map(tab => (
            <Nav.Link 
              href={'#' + tab.toLowerCase()} 
              key={tab} 
              onClick={() => props.handlePageChange(tab)}
              className={props.currentPage === tab ? 'navActive' : 'navInactive'}
            >
              {tab}
            </Nav.Link>
            ))} 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;