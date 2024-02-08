// Navbars.js

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

const Navbars = () => {
  return (
    <section id='navbar'>
      <div className='whole-nav-bar'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand className='navb'>Portfolio</Navbar.Brand>
            <Nav>
              <Nav.Link className='navs' href="#home">Home</Nav.Link>
              <Nav.Link className='navs' href="#about">About</Nav.Link>
              <Nav.Link className='navs' href="#projects">Projects</Nav.Link>            
              <Nav.Link className='navs' href="#skills">Skills</Nav.Link>    
              <Nav.Link className='navs' href="#contact">Contact</Nav.Link>            
            </Nav>
          </Container>
        </Navbar>
      </div>
    </section>
  );
}

export default Navbars;
