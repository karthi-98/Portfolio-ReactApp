import React, { useLayoutEffect, useRef } from "react";
import { COLOR, FONTSIZE } from "../Constants/theme";
import { gsap } from "gsap";
import dataJson from "../Assets/myDetails.json";
import EducationDetails from "./EducationDetails";
import Line from "../Styles/Line";

const Education = () => {
  const appRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0.5,
        stagger: 0.5,
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      <Line color={"violet"} />
      <div style={{ color: `${COLOR.white}` }}>
        <div style={{ margin: "0 auto", width: "70vw" }}>
          <div
            style={{
              overflow: "hidden",
              height: "4rem",
              margin: "2rem 0",
            }}
          >
            <h1 className="edu" style={{ fontSize: FONTSIZE.xxxlarge }}>
              Educational Details
            </h1>
          </div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "2rem",
              fontSize: FONTSIZE.large,
              fontWeight: 400,
              listStyle: "none",
              paddingLeft: "3rem",
            }}
          >
            {dataJson.education.map((item) => (
              <div className="edu">
                <EducationDetails details={item} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
