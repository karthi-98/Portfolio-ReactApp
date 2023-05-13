import React, { useLayoutEffect, useRef } from "react";
import { COLOR, FONTSIZE } from "../Constants/theme";
import { gsap } from "gsap";
import dataJson from "../Assets/myDetails.json";
import EducationDetails from "./EducationDetails";

const Education = () => {
  const appRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".line",
        {
          width: "0vw",
          marginLeft: "50vw",
        },
        {
          marginLeft: "0vw",

          width: "100vw",
          duration: 2,
        }
      );
      gsap.from(".edu", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        stagger: 0.5,
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      <div
        className="line"
        style={{
          margin: "30px 0",
          height: "1px",
          backgroundImage:
            "linear-gradient(90deg,rgba(0, 0, 0, 0), rgba(174, 62, 201, .7), rgba(0, 0, 0, 0))",
        }}
      ></div>
      <div style={{ color: `${COLOR.white}` }}>
        <div style={{ margin: "0 auto", width: "70vw" }}>
          <h1
            className="edu"
            style={{ margin: "5rem 0", fontSize: FONTSIZE.xxxlarge }}
          >
            Educational Details
          </h1>
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
