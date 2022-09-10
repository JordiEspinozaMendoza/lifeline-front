import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {Ambulances} from "./components/Ambulances"
import {Drivers} from "./components/Drivers"
import {Prueba} from "./components/Prueba"
import {useEffect} from 'react'

function App() {

  
  return (
    <div>
      <Router>
      <Navbar/>
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
