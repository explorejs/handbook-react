import React from "react";
import ContentRow from "../components/ContentRow";

const Home = ({ data, theme }) => (
  <div
    style={{
      fontFamily: "Lato",
      padding: "1rem",
      backgroundColor: theme["background-color"],
    }}
  >
    <h2
      style={{ fontSize: "1.5rem", margin: "0 0 1rem 0", color: theme.color }}
    >
      Current Resources
    </h2>
    <ul style={{ padding: "1rem 0" }}>
      {data.map((resource) => (
        <ContentRow resource={resource} key={resource._id} theme={theme} />
      ))}
    </ul>
  </div>
);

export default Home;
