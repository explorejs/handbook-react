import React from 'react'
import { Link, NavLink } from "react-router-dom";

import styled from 'styled-components'

const Container = styled.div`
    padding: 4.5rem;
    display: flex;
    flex-direction: column;
    font-family: "Lato", sans-serif;
    justify-content: space-between;
    align-items: center;
    height: 35rem;
`

const FirstBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-family: "Lato", sans-serif;
`
const SecondBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    font-family: "Lato", sans-serif;
`

const LinkText = styled.p`
    text-align: center;
    font-family: "Lato", sans-serif;
    text-align: center;
    margin-top: 1.3rem;
    color: ${props => props.theme.mainText};

    &:active {
        color: ${props => props.theme.link};
        font-weight: 500;
    }
    &:hover {
        color: ${props => props.theme.link};
        font-weight: 500;
    }
`

// TODO: color of links for the current page should be darkBkue

const NavLinks = () => {
    return (
        <Container>
            <FirstBox>
                {/* <Link to="/">
                    <LinkText>Home</LinkText>
                </Link> */}

                <NavLink exact to="/" activeStyle=
                {{color: "#1A3B79"}}>
                    <LinkText> Home </LinkText>
                </NavLink>

                <NavLink exact to="#">
                    <LinkText>Add New</LinkText>
                </NavLink>

                <NavLink exact to="#">
                    <LinkText>Saved</LinkText>
                </NavLink>

                <NavLink exact to="#">
                    <LinkText>Shared</LinkText>
                </NavLink>
            </FirstBox>

            <SecondBox>
                <NavLink exact to="#">
                    <LinkText> Sign Out </LinkText>
                </NavLink>

                <NavLink exact to="/about" activeStyle=
                {{color: "#1A3B79"}}>
                    <LinkText> About </LinkText>
                </NavLink>
            </SecondBox>
            
        </Container>
    )
}

export default NavLinks
