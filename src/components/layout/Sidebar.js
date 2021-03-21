import React from 'react'
import styled from 'styled-components'
import Container from '../Sidebar/Container'

const Wrapper = styled.div`
    padding: ${props => props.theme.padding.large} ${props => props.theme.padding.large} ${props => props.theme.padding.large} 0rem;
    background-color: ${props => props.theme.colors.lightBg};
    display: flex;
    flex-direction: column;
`

// padding: ${props => props.theme.padding.large};

const Sidebar = () => {
    return (
        <Wrapper>
            <Container title={'Last month points leader'}/>
            <Container title={'This month leaderboard'}/>
        </Wrapper>
    )
}

export default Sidebar
