import './App.css'
import Nav from '../src/components/Nav';
import Welcome from './components/Welcome';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from './components/Projects';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div className='app flex flex-col'>
      <Nav/>
      <Welcome/>
      <About />
      <Projects/>
      <Skills />
      <Contact/>
    </div>

  );
}

export default App;