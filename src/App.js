
import { Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Project from '../src/components/Project';

function App() {
  return (

    <Switch>
      <Route component={Home} exact path='/'/>
      <Route component={About} path='/about'/>
      <Route component={Project} path='/project'/>
    </Switch>

  );
}

export default App;
