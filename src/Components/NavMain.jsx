import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import icons from "../Assets/Icons/icons";
import { COLOR } from "../Constants/theme";
import {
  IconContainer,
  IconSpecificContainer,
  IconStyle,
  IconText,
  ProfilePic,
  HeaderContainer,
  MobMenu,
} from "../Styles/NavMain";

import "../Styles/NavMain.css";

const NavMain = () => {
  const [mobOpen, setmobOpen] = useState(false);
  const [mobNav, setmobNav] = useState(false);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <nav>
      <HeaderContainer>
        <ProfilePic src={icons.myImg} />
        {(mobNav || windowSize.current[0] > 800) && (
          <IconContainer>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.6,
                transition: "all .2s ease-in-out",
              })}
            >
              <IconSpecificContainer colorBack={"green"}>
                <IconStyle
                  src={icons.about}
                  alt="About Me"
                  hoverTitle={"About Me"}
                />
                <IconText>About Me</IconText>
              </IconSpecificContainer>
            </NavLink>

            <NavLink
              to="/education"
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.6,
                transition: "all .2s ease-in-out",
              })}
            >
              <IconSpecificContainer>
                <IconStyle
                  src={icons.education}
                  alt="Education Qualification"
                />
                <IconText>Education</IconText>
              </IconSpecificContainer>
            </NavLink>

            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                transition: "all .2s ease-in-out",
                opacity: isActive ? 1 : 0.6,
              })}
            >
              <IconSpecificContainer>
                <IconStyle src={icons.projects} alt="Projects" />
                <IconText>Projects</IconText>
              </IconSpecificContainer>
            </NavLink>
            <NavLink
              to="/aboutsite"
              style={({ isActive }) => ({
                opacity: isActive ? 1 : 0.6,
                transition: "all .2s ease-in-out",
              })}
            >
              <IconSpecificContainer>
                <IconStyle src={icons.website} alt="My Portfolio website" />
                <IconText>Site Info</IconText>
              </IconSpecificContainer>
            </NavLink>
          </IconContainer>
        )}
        <MobMenu mob={mobOpen}>
          {!mobOpen ? (
            <img
              onClick={() => {
                setmobNav(true);
                setmobOpen(true);
                console.log("Menu Icon");
              }}
              alt="Mobile Navigation Closed"
              src={icons.menu}
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            <img
              onClick={() => {
                setmobNav(false);
                setmobOpen(false);
                console.log("Close Icon");
              }}
              alt="Mobile Navigation Open"
              src={icons.menuClose}
              style={{ width: "30px", height: "30px" }}
            />
          )}
        </MobMenu>
      </HeaderContainer>
    </nav>
  );
};

export default NavMain;
