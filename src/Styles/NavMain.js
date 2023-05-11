import { styled } from "styled-components";

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

export const ProfilePic = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  object-fit: cover;
`;

export const IconContainer = styled.div`
  display: flex;
  column-gap: 2.5rem;
  padding-top: 10px;

  a {
    color: #000;
  }

  @media (max-width: 800px) {
    & {
      position: absolute;
      display: (${(props) => (!props.mobNav ? "none" : "block")});
      z-index: 1;
      top: -1px;
      right: -1px;
      flex-direction: column;
      align-items: start;
      background-color: black;
      width: 90vw;
      height: 90vh;
      padding-top: 20px;
      border-radius: 0 0 0 20px;
    }
  }
`;

export const IconSpecificContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0.5rem;
  padding-bottom: 1.5rem;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 800px) {
    & {
      padding-left: 30px;
      flex-direction: row;
      column-gap: 2rem;

      &:hover {
        box-shadow: none;
      }
    }
  }
`;

export const IconStyle = styled.img`
  height: 35px;
  width: 35px;
  margin-bottom: 8px;
`;

export const IconText = styled.h3`
  font-size: 1.3rem;

  @media (max-width: 800px) {
    & {
      color: white;
    }
  }
`;

// Mobile Navigation

export const MobMenu = styled.div`
  display: none;

  @media (max-width: 800px) {
    & {
      display: block;
      z-index: 10;
    }
  }
`;
