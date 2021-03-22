import React from 'react'
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import { lightTheme, darkTheme } from '../../theme/theme';
import styled from 'styled-components'

const StyledDiv = styled.div`
    padding-bottom: 1rem;
`
const StyledInput = styled.input`
    position: relative;

    width: 40px;
    height: 20px;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    background: ${props => props.theme.headingBlue};
    border-radius: 20px;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
    display: flex;
    -webkit-transition: all 0.2s ease-in;  
    -moz-transition: all 0.2s ease-in;  
    -o-transition: all 0.2s ease-in; 
    transition: all 0.2s ease-in;  
    
    &:checked {
        /* background: ${props => props.theme.headingBlue}; */
        background: lightblue;
    }

    &::before {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        right: 5px;
        border-radius: 20px;
        background-color: white;
        transition: 2s;
        align-self: center;
    }

    &:checked::before {
        left: 5px;
    }
`

const ModeToggle = ({toggleTheme}) => {
    return (
        // <div>
        //     {(props) => props.theme.bgSide === '#1B1B1B' ? (
        //     <RiLightbulbFlashFill />
        //     ) : (
        //     <RiLightbulbFlashLine />
        //     )}
        // </div>
        <StyledDiv>
            <StyledInput type="checkbox" name="checkbox" />
        </StyledDiv>
        
    )
}

// onClick={() => toggleTheme()}
// theme["background-color"] === "black"
export default ModeToggle
