import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        alignItems: "center",
        color: "black",
        display: "flex",
        fontFamily: "Lato",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <h2>Handbook</h2>
      <Link to="/learn-more">Learn More</Link>
    </div>
  );
}
