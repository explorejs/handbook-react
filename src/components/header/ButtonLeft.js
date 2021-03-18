import React from 'react'
import styled from 'styled-components'
import Hamburger from '../../images/hamburger.svg';


const HumburgerButton = styled.img`
    margin-top: 2rem;
    width: 40px;
    height: 40px;
    cursor: pointer;
`

const ButtonLeft = () => {
    return (
        <HumburgerButton src={Hamburger}/>
    )
}

export default ButtonLeft

