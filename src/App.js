import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components'
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";
import SideHeader from "./components/layout/SideHeader"
import THEME from "./theme.json";

// Themes
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';

const App = () => {
  const [state, setState] = useState({
    currentTheme: "light",
    data: [],
  });

  const toggleTheme = () => {
    setState((s) => ({
      ...s,
      currentTheme: state.currentTheme === "light" ? "dark" : "light",
    }));
  };

  const getData = async () => {
    try {
      const serverUrl =
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_SERVER_BASE_URL
          : "http://localhost:8000";
      const result = await fetch(`${serverUrl}/mongo`)
        .then((R) => R.json())
        .then((R) => R);
      if (result && result.data) {
        setState((s) => ({ ...s, data: result.data }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const theme = THEME[state.currentTheme];

  const DocumentBody = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
  `

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        {/* <Header toggleTheme={toggleTheme} theme={theme} /> */}
        <DocumentBody>
          <SideHeader/> 
            <Main theme={theme}>
              <Switch>
                <Route path="/about">
                  <About theme={theme} />
                </Route>
                <Route path="/">
                  <Home data={state.data} theme={theme} />
                </Route>
              </Switch>
            </Main>
            <Sidebar/> 
          {/* <Footer theme={theme} /> */}
        </DocumentBody>
      </Router>
    </ThemeProvider>
  );
};

export default App;
