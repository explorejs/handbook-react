import React, {useState} from "react";
import styled from "styled-components"
import { useAuth } from "../hooks/useAuth";

// Components
import ContentRow from "../components/ContentRow";
import Heading1 from "../components/Heading1";
import Card from "../components/card/Card"

const FilterSelectDiv = styled.div`
      display:flex;
      justify-content:flex-end;
      width:100%;
`

const Home = ({ data, theme }) => {
  const { favorites, toggleFavorite } = useAuth();

  const [state,setState] = useState({
    order:"recent"
  })

  const orderedData = () => {
    if(state.order === "recent"){
      return [...data].sort((A,B) => {
        A = A.ts.split('/').reverse().join('');
        B = B.ts.split('/').reverse().join('');
        return B.localeCompare(A); 
      } )
    }
    return data
  }

  const handleOrder = (e) => {
    setState(s => ({...s, order:e.target.value}))
  }


  return ( 
    <div>
      <Heading1 mgL content="Handbook.Dev" />
      <FilterSelectDiv>
        <select onChange={handleOrder}>
          <option value="recent">Recent</option>
          <option value="reverse">Reverse</option>
        </select>
      </FilterSelectDiv>
      {/* Search component with filtering & title search */}
      <ul>
        {orderedData().map((resource) => (
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
