import React from "react";
import ContentRow from "../components/ContentRow";

const Home = ({ data, theme }) => (
  <div>
    <h1>Handbook.Dev</h1>
    {/* Search component with filtering & title search */}
    
    <ul>
      {data.map((resource) => (
        <ContentRow resource={resource} key={resource._id} theme={theme} />
      ))}
    </ul>
  </div>
);

export default Home;
