import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

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
    <div ref={app} style={{ overflow: "hidden" }}>
      <h1 className="main">Hi, this is Karthick</h1>
    </div>
  );
};

export default Aboutme;
