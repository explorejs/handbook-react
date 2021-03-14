import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
font-family: "Lato", sans-serif;
font-size: 12px;
color: rgba(0, 0, 0, 65%);
`


const Copyright = () => {
    return (
        <Text>
            ExploreJS © 2021
        </Text>
    )
}

export default Copyright
