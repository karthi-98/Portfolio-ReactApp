import React, { useLayoutEffect, useRef } from "react";
import { NavText, NavContainer } from "../Styles/Styled Comp/SC_Nav";
import { NavLink } from "react-router-dom";
import "../index.css";
import { gsap } from "gsap";
import useNav from "../Hooks/useNav";

const Nav = () => {
  const appRef = useRef();
  const { navPos, changePosition } = useNav();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav", {
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: {
          each: 0.5,
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      <NavContainer pos={navPos}>
        <NavLink
          onClick={() => changePosition("left")}
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav" : "notActive nav"
          }
          end
        >
          <NavText>Home</NavText>
        </NavLink>
        <NavLink
          onClick={() => changePosition("left")}
          to="/education"
          className={({ isActive }) =>
            isActive ? "activeEdu nav" : "notActive nav"
          }
        >
          <NavText>Education</NavText>
        </NavLink>
        <NavLink
          onClick={() => changePosition("left")}
          to="/projects&skills"
          className={({ isActive }) =>
            isActive ? "activePS nav" : "notActive nav"
          }
        >
          <NavText>Projects & Skills</NavText>
        </NavLink>
        <NavLink
          onClick={() => changePosition("left")}
          to="/certifications"
          className={({ isActive }) =>
            isActive ? "activeCert nav" : "notActive nav"
          }
        >
          <NavText>Certifications</NavText>
        </NavLink>
        <NavLink
          onClick={() => changePosition("left")}
          to="/about_site"
          className={({ isActive }) =>
            isActive ? "activeAS nav" : "notActive nav"
          }
        >
          <NavText>About Site</NavText>
        </NavLink>
      </NavContainer>
    </div>
  );
};

export default Nav;
