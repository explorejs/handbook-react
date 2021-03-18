import React from "react";
import styled from 'styled-components'

const MainWrapper = styled.main`
  padding: ${props => props.theme.padding.large};
  background-color: #F5F8FA;
  width: 100%;
`
// const MainTitle = styled.h1`
//   color: ${props => props.theme.colors.darkBlue};

// `

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
      <div>{children}</div>
      {/* search component here*/}
      {/* resources list view component here */}
    </MainWrapper>
  );
};
export default Main;
