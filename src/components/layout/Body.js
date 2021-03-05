import React from "react";
const Body = ({ children, theme }) => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme["background-color"],
        color: theme.color,
        minHeight: "95vh",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
};
export default Body;
