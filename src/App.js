import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {Ambulances} from "./components/Ambulances"
import {Drivers} from "./components/Drivers"
import {Check} from "./components/Check"
import './App.css';
import {prueba} from "./components/prueba"
import React from 'react'
import {Home} from "./components/Home"
function App() {

  return (
    
      <div class="Todo">
      <Router>
      <Navbar/>
      <hr class="Linea"/>
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/ambulances">
            <Ambulances/>
          </Route>
          <Route exact path="/drivers">
            <Drivers/>
          </Route>
          <Route exact path="/prueba">
            <prueba/>
          </Route>
          <Route exact path="/check">
            <Check/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
