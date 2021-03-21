import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Styled Components
import GlobalStyle from "./theme/globalStyles"
// import Theme from './theme/theme';


ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
