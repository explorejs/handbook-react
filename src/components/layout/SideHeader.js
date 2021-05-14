import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import GlobalVars from "../../theme/theme";
import { useWindowSize } from "../../hooks/useWindowSize";

// Components
import UserInfo from "../header/UserInfo";
import NavLinks from "../header/NavLinks";
import Copyright from "../header/Copyright";
import ButtonLeft from "../header/ButtonLeft";
import ModeToggle from "../header/ModeToggle";

const SideNav = styled.nav`
  height: 100vh;

  padding-top: 4.5rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.bgSide};

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  box-shadow: 1px 1px 10px 8px rgba(0, 0, 0, 1%);
`;

const SideHeader = ({ toggleTheme }) => {
  const nodeRef = useRef();
  const { width } = useWindowSize();
  // if screen is wider then 659 pixels start with the sidebar open
  const [expanded, setExpanded] = useState(width > 659);
  const contentProps = useSpring({
    marginLeft: expanded ? "0px" : "-200px",
  });

  const handleExpand = () => {
    setExpanded((s) => !s);
  };
  const handleSideBarClick = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleClickOutside = useCallback(
    (e) => {
      // if clicking on the sidebar don't do anything
      if (nodeRef.current.contains(e.target)) {
        return;
      }
      if (Number(width) < 700) {
        handleExpand();
      }
    },
    [width]
  );

  useEffect(() => {
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded, handleClickOutside, width]);

  return (
    <animated.div
      style={contentProps}
      ref={nodeRef}
      onClick={handleSideBarClick}
    >
      <SideNav>
        <UserInfo />
        <NavLinks />
        <ModeToggle toggleTheme={toggleTheme} />
        <Copyright />
        <ButtonLeft expanded={expanded} handleExpand={handleExpand} />
      </SideNav>
    </animated.div>
  );
};

export default SideHeader;
