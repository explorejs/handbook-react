import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: ${(props) => props.theme.headingBlue};
`;

const Heading1 = ({content}) => 
        <Heading>
            {content}
        </Heading>


export default Heading1
