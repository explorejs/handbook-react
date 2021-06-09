import React from 'react'
import styled from 'styled-components'


const Heading1 = ({content, mgL}) => 
        <Heading mgL={mgL}>
            {content}
        </Heading>

export default Heading1

const Heading = styled.h1`
  color: ${(props) => props.theme.headingBlue};
  margin-left: ${ props => props.mgL && "50px"};
`; 