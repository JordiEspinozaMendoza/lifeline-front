import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {Ambulances} from "./components/Ambulances"
import {Drivers} from "./components/Drivers"

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
        </Switch>
      </Router>

    </div>
  );
}

export default App;
