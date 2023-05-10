import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../Assets/Icons/icons";
import {
  IconContainer,
  IconSpecificContainer,
  IconStyle,
  IconText,
  ProfilePic,
  HeaderContainer,
  HeaderLeft,
} from "../Styles/NavMain";

const NavMain = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <ProfilePic src={icons.myImg} />
        {/* <div>
          <h1 style={{ fontSize: "2rem" }}>Karthick P</h1>
          <p style={{ fontSize: "1.4rem", marginTop: "1.2rem" }}>
            Sr. Software Engineer
          </p>
        </div> */}
      </HeaderLeft>
      <nav>
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
              <IconStyle src={icons.education} alt="Education Qualification" />
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
        </IconContainer>
      </nav>
      <NavLink
        to="/aboutsite"
        style={({ isActive }) => ({
          opacity: isActive ? 1 : 0.6,
          transition: "all .2s ease-in-out",
        })}
      >
        <IconSpecificContainer>
          <IconStyle src={icons.website} alt="My Portfolio website" />
          <IconText>About this site</IconText>
        </IconSpecificContainer>
      </NavLink>
    </HeaderContainer>
  );
};

export default NavMain;
