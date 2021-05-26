import React from "react";
import { useAuth } from "../hooks/useAuth";

// Components
import ContentRow from "../components/ContentRow";
import Heading1 from "../components/Heading1";
import Card from "../components/card/Card"

const Home = ({ data, theme }) => {
  const { favorites, toggleFavorite } = useAuth();

  return ( 
    <div>
      <Heading1 mgL content="Handbook.Dev" />
      {/* Search component with filtering & title search */}
      <ul>
        {data.map((resource) => (
          <Card
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
