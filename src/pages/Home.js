import React from "react";
import { useAuth } from "../hooks/useAuth";

// Components
import ContentRow from "../components/ContentRow";
import Heading1 from "../components/Heading1";
import Card from '../components/Card'

const Home = ({ data, theme }) => {
  const { profile, toggleFavorite } = useAuth();
  const { favorites = {} } = profile;
  return (
    <div>
      <Heading1 content="Handbook.Dev" />
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
      <Card />
    </div>
  );
};

export default Home;
