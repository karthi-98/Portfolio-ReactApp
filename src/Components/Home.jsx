import React, { useLayoutEffect, useRef } from "react";
import { COLOR, FONTSIZE, ICONS } from "../Constants/theme";
import { gsap } from "gsap";
import { Power4 } from "gsap";
import Line from "../Styles/Line";

const Home = () => {
  const refObj = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".profilePic", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: Power4.easeInOut,
      });
      gsap.from(".name", {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: Power4.easeInOut,
      });
      gsap.from(".profile", {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: Power4.easeInOut,
      });
    }, refObj);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={refObj}>
      <Line color="orange" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "3rem",
          width: "100%",
          alignItems: "center",
        }}
      >
        <img
          className="profilePic"
          alt="My Profile"
          src={ICONS.myImg}
          style={{
            width: "125px",
            height: "125px",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />

        {/* <div
            style={{
              top: "20%",
              height: "20vh",
              width: "50vw",
              // backgroundImage: "radial-gradient(#21cbff 50%,#061118 40%)",
              // filter: "blur(200px)",
              position: "absolute",
            }}
          ></div> */}
        <p
          className="name"
          style={{
            fontSize: FONTSIZE.xxxxlarge,
            fontWeight: "600",
            color: COLOR.white,
          }}
        >
          Hi, I'm
          <span style={{ color: COLOR.orange }}> Karthick 👋</span>
        </p>
        {/* <div
          className="profile"
          style={{
            width: "60%",
            height: "60vh",
            // border: `5px solid ${COLOR.white}`,
            borderRadius: "60px",
            textAlign: "center",
            rowGap: "2rem",
            // padding: "0 5rem",
          }}
        > */}
        <p
          className="profile"
          style={{
            width: "50%",
            color: COLOR.white,
            fontSize: FONTSIZE.xlarge,
            textAlign: "center",
            lineHeight: "3.5",
            wordSpacing: "3px",
          }}
        >
          <q>
            Having two years of experience as Project Engineer in Wipro. Proven
            efficiency with an ability to quickly learn and creating an
            environment for developing, quality assurance, staging and deploying
            in production work can proceed efficiently and securely
          </q>
        </p>
      </div>
    </div>
    // </div>s
  );
};

export default Home;
