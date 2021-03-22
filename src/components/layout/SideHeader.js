import React from 'react'
import styled from 'styled-components'

// Components
import UserInfo from "../header/UserInfo"
import NavLinks from "../header/NavLinks"
import Copyright from "../header/Copyright"
import ButtonLeft from "../header/ButtonLeft"
import ModeToggle from "../header/ModeToggle"

const SideNav = styled.nav`
    height: 100vh;

    padding-top: 4.5rem;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.bgSide};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    box-shadow: 4px 2px 4px 11px rgba(0, 0, 0, 0.2);

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
