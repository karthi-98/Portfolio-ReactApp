import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { AMTitle, AboutMeContainer } from "../Styles/Aboutme/Aboutme";

const Aboutme = () => {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".main", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <AboutMeContainer>
      <AMTitle>
        <span> Hi buddy, this is</span> Karthick
      </AMTitle>
      <div
        style={{
          width: "80vw",
          height: "70vh",
          borderRadius: "100px",
        }}
      ></div>
    </AboutMeContainer>
  );
};

export default Aboutme;
