import { styled } from "styled-components";
import { COLOR, FONTSIZE } from "../../Constants/theme";

export const NavContainer = styled.nav`
  display: flex;
  column-gap: 3rem;
  justify-content: end;
  padding: 8vh 20vw 0 0;
  align-items: center;

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