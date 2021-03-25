import React from "react";
import styled from "styled-components"

const Title = styled.h1`
    color: ${props => props.theme.headingBlue};
`   

const About = () => {
  return (
    <Title>
      About
    </Title>
  );
};

export default About;
