import React from "react";

const Footer = ({ theme }) => (
  <footer
    style={{
      justifyContent: "center",
      backgroundColor: theme["background-color"],
      color: theme.color,
      display: "flex",
      padding: "1rem 0",
      width: "100vw",
    }}
  >
    <p
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        fontFamily: "Lato",
        fontSize: "1rem",
      }}
    >
      <span> ExploreJS </span>© {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
