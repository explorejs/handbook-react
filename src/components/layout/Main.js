import React from "react";
import styled from 'styled-components'

const MainWrapper = styled.main`
  padding: 4.5rem;
  background-color: ${props => props.theme.bgMain};
  width: 100%;
`
const StyledDiv = styled.div`
  color: ${props => props.theme.mainText};
`


const Main = ({ children, theme }) => {
  return (
    // <div
    //   style={{
    //     alignItems: "center",
    //     backgroundColor: theme["background-color"],
    //     color: theme.color,
    //     minHeight: "95vh",
    //     width: "100vw",
    //   }}
    // >
    //   {children}
    // </div>
    <MainWrapper>
      <StyledDiv>{children}</StyledDiv>
      {/* search component here*/}
      {/* resources list view component here */}
    </MainWrapper>
  );
};
export default Main;
