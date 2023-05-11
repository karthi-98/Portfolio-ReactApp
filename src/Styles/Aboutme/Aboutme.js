import { styled } from "styled-components";
import { COLOR } from "../../Constants/theme";

const AboutMeContainer = styled.div`
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
`;

const AMTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  color: ${COLOR.primary};

  span {
    letter-spacing: 0;
    font-size: 1.8rem;
    font-weight: 300;
  }
`;

export { AboutMeContainer, AMTitle };
