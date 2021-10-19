import React from 'react';
import './App.css'
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Photos from './components/Photos';

function App() {
  return (
    <div className='app flex flex-col'>
      <Nav/>
      <Welcome/>
      <About />
      <Projects/>
      <Skills />
      <Contact/>
      <Photos />
    </div>

  );
}

export default App;