import React from "react";
import styled from "styled-components";
import DefaultImg from "../../images/defaultAvatar.png";
import StarImg from "../../images/star.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
    color: ${props => props.theme.heading};
    margin-bottom: 0.3rem;
`

const UserStatus = styled.h5`
    margin-bottom: 0.3rem;
    margin-top: 0.6rem;
    font-size: 12px;
    font-weight: 400;
    color: ${props => props.theme.smallText};
`

const PointsWrapper = styled.div`
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;
const PointsNum = styled.p`
    color: ${props => props.theme.smallText};
    font-size: 11px;
    font-weight: 400;
`
const PointsImg = styled.img`
  margin-right: 0.1rem;
  width: 12px;
  height: 12px;
`;

const UserInfo = () => (
  <Wrapper>
    <UserImg src={DefaultImg} />
    <Title>Welcome!</Title>
    <UserStatus>Super Admin</UserStatus>
    <PointsWrapper>
      <PointsImg src={StarImg} />
      <PointsNum>1.999</PointsNum>
    </PointsWrapper>
  </Wrapper>
);

export default UserInfo;
