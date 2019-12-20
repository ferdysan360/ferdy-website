import React from 'react';
import './App.css';
import Title from '../Title/Title'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import About from '../About/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="Title">
          <Title/>
        </div>
        <a href="#Title">Title</a>
        <a href="#Experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#About">About</a>
        <div id="Experience">
          <Experience/>
        </div>
        <div id="Projects">
          <Projects/>
        </div>
        <div id="About">
          <About/>
        </div>
      </header>
    </div>
  );
}

export default App;
