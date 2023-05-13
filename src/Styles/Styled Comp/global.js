import { styled } from "styled-components";
import { COLOR, FONTSIZE } from "../../Constants/theme";

export const Button = styled.button`
  background-color: ${COLOR.orange};
  color: ${COLOR.white};
  font-size: ${FONTSIZE.regular};
  border-radius: 10px;
  border: none;
  font-weight: 600;
  padding: 1.5rem 3rem;
`;
