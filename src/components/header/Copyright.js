import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
font-family: "Lato", sans-serif;
font-size: 12px;
color: ${props => props.theme.smallText};
`


const Copyright = () => {
    return (
        <StyledText>
            ExploreJS © 2021
        </StyledText>
    )
}

export default Copyright
