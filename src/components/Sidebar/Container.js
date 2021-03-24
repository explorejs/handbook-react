import React from 'react'
import styled from 'styled-components'
import DefaultImg from '../../images/defaultAvatar.png';
import StarImg from '../../images/star.svg';



const StyledContainer = styled.div`
    background-color: ${props => props.theme.bgCard};
    border-radius: 16px;
    padding: 2rem 1rem 2rem 1rem;
    width: 14rem;
    margin-bottom: 1.5rem;
    box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 1%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UserBox = styled.div`
    margin-top: 1.4rem; 
    display: flex;
    flex-direction: row;
`
const StyledTitle = styled.h4`
    color: ${props => props.theme.heading};
`

const UserImg = styled.img`
    margin-right: 1rem;
    width: 30px;
    height: 28px;
    border-radius: 40px;    
`

const UserName = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.mainText};
`
const PointsWrapper = styled.div`
    margin-bottom: 0.3rem;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: flex-start;
`
const PointsNum = styled.p`
    color: ${props => props.theme.mainText};
    font-size: 11px;
    font-weight: 400;
`
const PointsImg = styled.img`
    margin-right: 0.1rem;
    width: 12px;
    height: 12px;
`


const Container = ({title}) => {
    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <UserBox>
                <UserImg src={DefaultImg} />
                <div>
                    <UserName>Nick Foden</UserName>
                    <PointsWrapper>
                        <PointsImg src={StarImg} />
                        <PointsNum>1.999</PointsNum>
                    </PointsWrapper>
                </div>
            </UserBox>
        </StyledContainer>
    )
}

export default Container
