import React from "react";
import NavMain from "./NavMain";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const RootMain = () => {
  const MainComponent = styled.main`
    padding: 8px 30px;
  `;

  return (
    <MainComponent>
      <NavMain />
      <Outlet />
    </MainComponent>
  );
};

export default RootMain;
