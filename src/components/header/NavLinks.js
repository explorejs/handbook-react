import React from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'

const Container = styled.div`
    padding: ${ props => props.theme.padding.large};
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

    &:active {
        color: #1A3B79;
        font-weight: 500;
    }
`

// TODO: color of links for the current page should be darkBkue

const NavLinks = () => {
    return (
        <Container>
            <FirstBox>
                <Link to="/">
                    <LinkText>Home</LinkText>
                </Link>
                <Link to="/addnew">
                    <LinkText>Add New</LinkText>
                </Link>
                <Link to="/">
                    <LinkText>Saved</LinkText>
                </Link>
                <Link to="/">
                    <LinkText>Shared</LinkText>
                </Link>
            </FirstBox>

            <SecondBox>
                <Link to="/">
                    <LinkText>Sign Out</LinkText>
                </Link>
                <Link to="/About">
                    <LinkText>About</LinkText>
                </Link>
            </SecondBox>
            
        </Container>
    )
}

export default NavLinks
