import React from "react";
import styled from "styled-components";
import ContentRow from "../components/ContentRow";

const Home = ({ data, theme }) => {
  const Title = styled.h2`
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    color: ${theme.color};
  `;

  return (
    <div
      style={{
        fontFamily: "Lato",
        padding: "1rem",
        backgroundColor: theme["background-color"],
      }}
    >
      <Title>Current Resources</Title>
      <ul style={{ padding: "1rem 0" }}>
        {data.map((resource) => (
          <ContentRow resource={resource} key={resource._id} theme={theme} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
