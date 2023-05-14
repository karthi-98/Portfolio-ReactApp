import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Line = (props) => {
  const lineColor =
    props.color === "violet"
      ? "rgba(174, 62, 201, .7)"
      : props.color === "green"
      ? "#40c057"
      : props.color === "yellow"
      ? "#fab005"
      : props.color === "blue"
      ? "#7950f2"
      : "#f66b0e";

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
          backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 0), ${lineColor}, rgba(0, 0, 0, 0))`,
        }}
      ></div>
      ;
    </div>
  );
};

export default Line;
