import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/tree/details";
import Register from "./components/registration/registration.component";
import { UserDetails } from "./components/user-details/UserDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              Tree
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <Switch>
            <Route exact path="/" component={Details} />
            <Route path="/users/:id" component={UserDetails} />
            <Route path="/sign-up" component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
