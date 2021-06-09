import React from 'react'
import styled from 'styled-components'
import Container from '../Sidebar/Container'


const Sidebar = () => {
    return (
        <Wrapper>
            <Container title={'Last month points leader'}/>
            <Container title={'This month leaderboard'}/>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    padding: 4.5rem 4.5rem 4.5rem 0rem;
    background-color: ${props => props.theme.bgMain};
    display: flex;
    flex-direction: column;
`