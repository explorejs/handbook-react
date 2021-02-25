import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            alignItems: "center",
            color: "black",
            display: "flex",
            fontFamily: "Lato",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <Link to="/">
            <h2>Handbook.Dev</h2>
          </Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
