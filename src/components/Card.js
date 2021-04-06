import React from 'react'
import styled from 'styled-components'
import bookmark from '../images/bookmark.svg'

const Wrapper = styled.div`
    width: 100%;
    height: 10rem;
    background-color: ${props => props.theme.bgSide};
    padding: 2rem 3rem;
    border-radius: 16px;
    box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 1%);
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
`

const Icon = styled.img`
    width: 15px;
    height: auto;
    cursor: pointer;
`

const Text = styled.p`
  color: ${props => props.small && 'gray'};
  font-size: ${props => props.small && '12px'};
  padding: 0.1rem 0rem;
`

const Card = (props) => {
    return (
        <Wrapper>
            <Flexbox>
                <h3>Exercism</h3> 
                <Icon src={bookmark} />
            </Flexbox>
            <Text small>March 23, 2021</Text>
            <Text small>Shared by Nick Folden</Text>
        </Wrapper>
    )
}

export default Card
