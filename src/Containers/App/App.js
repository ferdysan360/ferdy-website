import React from 'react';
import './App.css';
import Title from '../Title/Title'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
      </header>
      {/* <Navbar variant="dark" expand="md" sticky="top" className="navbar-container">
        <Navbar.Brand href="#">Ferdysan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link data-scroll href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div id="Experience">
        <Experience/>
      </div>
      <div id="Projects">
        <Projects/>
      </div>
      <div id="About">
        <About/>
      </div>
    </div>
  );
}

export default App;
