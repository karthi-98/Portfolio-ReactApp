import React, { useState } from "react";

const useNav = () => {
  const [navPos, setnavPos] = useState(true);
  const changePosition = (pos) => {
    if (pos === "center") {
      setnavPos(true);
    } else {
      setnavPos(false);
    }
  };

  return { navPos, changePosition };
};

export default useNav;
