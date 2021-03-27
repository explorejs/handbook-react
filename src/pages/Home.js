import React from "react";
import styled from "styled-components";

// Components
import ContentRow from "../components/ContentRow";
import Heading1 from "../components/Heading1"

const Home = ({ data, theme }) => (
  <div>
    
    <Heading1 content={"Handbook.Dev"}/>
    {/* Search component with filtering & title search */}

    <ul>
      {data.map((resource) => (
        <ContentRow resource={resource} key={resource._id} theme={theme} />
      ))}
    </ul>
  </div>
);

export default Home;
