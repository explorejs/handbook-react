import React from 'react'
import styled from 'styled-components'

// Components
import UserInfo from "../header/UserInfo"
import NavLinks from "../header/NavLinks"
import Copyright from "../header/Copyright"
import ButtonLeft from "../header/ButtonLeft"

const SideNav = styled.nav`
    height: 100vh;
    padding-top: ${props => props.theme.padding.large};
    padding-bottom: ${props => props.theme.padding.small};
    background-color: #FFFFFF;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
    box-shadow: 4px 2px 4px 11px rgba(0, 0, 0, 0.2);

`

const SideHeader = () => {
    return (
        <SideNav>
            <UserInfo />
            <NavLinks />
            <Copyright />
            <ButtonLeft />
        </SideNav>
    )
}

export default SideHeader
