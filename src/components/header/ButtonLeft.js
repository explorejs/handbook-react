import React from "react";
import styled from "styled-components";
import Hamburger from "../../images/hamburger.svg";

const HumburgerButton = styled.img`
  margin-top: 2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: ${({ expanded }) => (expanded ? "0px" : "180px")};
`;

const ButtonLeft = ({ expanded, handleExpand }) => (
  <HumburgerButton expanded={expanded} src={Hamburger} onClick={handleExpand} />
);

export default ButtonLeft;
