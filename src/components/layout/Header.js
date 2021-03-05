import React from "react";
import { Link } from "react-router-dom";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";

const Header = ({ theme, toggleTheme }) => (
  <nav
    style={{
      alignItems: "center",
      backgroundColor: theme["background-color"],
      color: theme.color,
      display: "flex",
      fontSize: "1.5rem",
      justifyContent: "space-between",
      padding: "1rem",
    }}
  >
    <Link to="/" style={{ color: theme.color, fontFamily: "Lato" }}>
      <h2>Handbook.Dev</h2>
    </Link>
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "1rem" }}>
        {theme["background-color"] === "black" ? (
          <RiLightbulbFlashFill onClick={() => toggleTheme()} />
        ) : (
          <RiLightbulbFlashLine onClick={() => toggleTheme()} />
        )}
      </div>
      <Link style={{ color: theme.color, fontFamily: "Lato" }} to="/about">
        About
      </Link>
    </div>
  </nav>
);

export default Header;
