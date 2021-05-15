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
        <Fixed>
          <UserInfo />
          <NavLinks />
          <ModeToggle toggleTheme={toggleTheme} />
          <Copyright />
          <ButtonLeft expanded={expanded} handleExpand={handleExpand} />
        </Fixed>
      </SideNav>
    </animated.div>
  );
};

export default SideHeader;



const SideNav = styled.div`
  height: auto;
  width: 270px;

  display: flex;
  justify-content: center;
  background: red;
  background-color: ${(props) => props.theme.bgSide};
`;

const Fixed = styled.nav`
  width: 270px;

  padding-top: 4.5rem;
  padding-bottom: 2rem;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgSide};

`