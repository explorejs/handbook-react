import React from 'react'
import styled from 'styled-components'
import GlobalVars from '../../theme/theme'

// Components
import UserInfo from "../header/UserInfo"
import NavLinks from "../header/NavLinks"
import Copyright from "../header/Copyright"
import ButtonLeft from "../header/ButtonLeft"
import ModeToggle from "../header/ModeToggle"

const SideNav = styled.nav`
    height: 100vh;
    max-width: 20rem;

    padding-top: 4.5rem;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.bgSide};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 1%);
`

const SideHeader = ({toggleTheme}) => {
    return (
        <SideNav>
            <UserInfo />
            <NavLinks />
            <ModeToggle toggleTheme={toggleTheme}/> 
            <Copyright />
            <ButtonLeft />
        </SideNav>
    )
}

export default SideHeader
