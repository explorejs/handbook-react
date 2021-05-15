import React from 'react'
import styled from 'styled-components'

const Box = styled.span`
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 1rem 0rem 0rem;
    min-width: 3rem;
    background-color: #E3EAD5;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
    color: ${ props => props.theme.smallText}!important;
    letter-spacing: 0.4px;
`

const Tag = ({content}) => {
    return (
        <Box>
            { content }
        </Box>
    )
}

export default Tag
