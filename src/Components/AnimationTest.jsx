import React, { useRef } from "react";
import { gsap } from "gsap";

const AnimationTest = () => {
  const appRef = useRef();

  const trigger = () => {
    gsap.from(".list", {
      opacity: 0,
      y: 10,
      duration: 0.5,
      stagger: {
        each: 0.5,
      },
    });
  };

  return (
    <div ref={appRef} style={{ backgroundColor: "white", height: "100vh" }}>
      <button onClick={trigger}>Animation Test</button>
      <ul>
        <li className="list">List</li>
        <li className="list">List</li>
        <li className="list">List</li>
        <li className="list">List</li>
        <li className="list">List</li>
      </ul>
    </div>
  );
};

export default AnimationTest;
