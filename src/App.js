import './App.css'
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Project from './components/Projects';
import Contact from '../src/components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <About />
      <Skills />
      <Project/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
