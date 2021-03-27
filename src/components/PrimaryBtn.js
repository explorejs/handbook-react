import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
    background-color: ${props => props.theme.headingBlue};
    color: white;
    border: none;
    padding: 6px 6px;
    margin: 16px 0px;
    border-radius: 6px;
    /* max-width: 90px; */
    min-width: 90px;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 7%);
    transition: all 0.2s ease;

    &:hover{
        box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 22%);
    }
`

const PrimaryBtn = ({content}) => {
    return (
        <StyledBtn>
            {content}
        </StyledBtn>
    )
}

export default PrimaryBtn
