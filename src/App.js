import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Project from '../src/components/Project';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <About 
      id='section!'/>
      <Skills />
      <Project/>
      <Contact/>
    </div>

  );
}

export default App;
