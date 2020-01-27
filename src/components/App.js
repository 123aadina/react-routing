import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import Home from './Home'
import About from "./About";
import Credit from "./Credit";
import '../styles/App.css';

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
        <Router>

          <div>
            <ul>

              <li>
                <NavLink activeClassName="active" to="/">Home</NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/About">About</NavLink>
              </li>

              <li>
                <NavLink  activeClassName="active" to="/Credit">Credit</NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/*">Nop</NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            <Route  exact path="/">
            <Home/>
              </Route> 
            <Route path="/about" component={About} />
            <Route path="/credit" component={Credit} />
            <Route path="*" render ={
              () => <div> 404 -NOT FOUND</div>}/>

          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
