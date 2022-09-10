import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {Ambulances} from "./components/Ambulances"
import {Drivers} from "./components/Drivers"
import './App.css';

function App() {

  
  return (
    
      <div class="Todo">
      <Router>
      <Navbar/>
      <hr class="Linea"/>
        <Switch>
          <Route exact path="/ambulances">
            <Ambulances/>
          </Route>
          <Route exact path="/drivers">
            <Drivers/>
          </Route>
          <Route exact path="/prueba">
            <Prueba/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
