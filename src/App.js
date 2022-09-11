import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import {Navbar2} from "./components/Navbar2"
import {Ambulances} from "./components/Ambulances"
import {Drivers} from "./components/Drivers"
import {Prueba} from "./components/prueba"
import {Home} from "./components/Home"
import {Check} from "./components/Check"
import {useEffect} from 'react'
import "./App.css"


function App() {
  
  // const showNav = window.location.pathname === "/" ? true : false;
  // console.log(showNav)

  // function returnNav(isNeeded) {
  //   if (!isNeeded)
  //     return(<Navbar/>)
  // }
  const defaultContainer= () => {
    return(
      <div>
        <Navbar/>
        <hr className='Linea'/>
          <Route exact path="/ambulances">
            <Ambulances/>
          </Route>
          <Route exact path="/drivers">
            <Drivers/>
          </Route>
          <Route exact path="/prueba">
            <Prueba/>
          </Route>
          <Route exact path="/check">
            <Check/>
          </Route>
      </div>
    )
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar2/>
            <hr className='Linea'/>
            <Home/>
          </Route>
          <Route component={defaultContainer}/>
          {/* <Navbar/>
          <Route exact path="/ambulances">
            <Ambulances/>
          </Route>
          <Route exact path="/drivers">
            <Drivers/>
          </Route>
          <Route exact path="/prueba">
            <Prueba/>
          </Route>
          <Route exact path="/check">
            <Check/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
