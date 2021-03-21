import React from 'react'
import styled from 'styled-components'
import DefaultImg from '../../images/defaultAvatar.png';
import StarImg from '../../images/star.svg';



const StyledContainer = styled.div`
    background-color: white;
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
    margin-top: ${props => props.theme.padding.xsmall}; 
    display: flex;
    flex-direction: row;
`

const UserImg = styled.img`
    margin-right: ${props => props.theme.padding.xxsmall};
    width: 30px;
    height: 28px;
    border-radius: 40px;    
`

const UserName = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 65%);
`
const PointsWrapper = styled.div`
    margin-bottom: 0.3rem;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: flex-start;
`
const PointsNum = styled.p`
    color: rgba(0, 0, 0, 65%);
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
            <h4>{title}</h4>
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
