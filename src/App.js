import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LearnMore from "./pages/LearnMore";
import Header from "./Header";

export default function App() {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      let data = await fetch("https://swapi.dev/api/people")
        .then((R) => R.json())
        .then((R) => R);
      setState(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
        <Header active />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learn-more">
            <LearnMore people={state} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
