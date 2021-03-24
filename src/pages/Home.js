import React from "react";
import styled from "styled-components";
import ContentRow from "../components/ContentRow";
import styled from 'styled-components'

const Title = styled.h1`
    color: ${props => props.theme.headingBlue};
`


const Home = ({ data, theme }) => (
  <div>
    <Title>Nick's Handbook</Title>
    {/* Search component with filtering & title search */}
    
    <ul>
      {data.map((resource) => (
        <ContentRow resource={resource} key={resource._id} theme={theme} />
      ))}
    </ul>
  </div>
);

export default Home;
