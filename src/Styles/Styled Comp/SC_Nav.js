import { styled } from "styled-components";
import { COLOR, FONTSIZE } from "../../Constants/theme";
import useNav from "../../Hooks/useNav";

export const NavContainer = styled.nav`
  display: flex;
  column-gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-left: 5rem;

  a {
    text-decoration: none;
  }
`;

export const NavText = styled.h1`
  font-size: ${FONTSIZE.large};
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${COLOR.lightOrange};
  }
`;
