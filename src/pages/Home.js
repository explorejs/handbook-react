import React from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import ContentRow from "../components/ContentRow";

const Title = styled.h1`
  color: ${(props) => props.theme.headingBlue};
`;

const Home = ({ data, theme }) => {
  const { profile, toggleFavorite } = useAuth();
  //
  const { favorites = {} } = profile;
  return (
    <div>
      <Title>Handbook.Dev</Title>
      {/* Search component with filtering & title search */}

      <ul>
        {data.map((resource) => (
          <ContentRow
            resource={resource}
            key={resource._id}
            theme={theme}
            favorite={favorites[resource._id]}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
