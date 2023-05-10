import { styled } from "styled-components";

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;

  @media (max-width: 1000px) {
  }

  a {
    text-decoration: none;
  }
`;

export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
`;

export const IconContainer = styled.div`
  display: flex;
  column-gap: 4rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const IconSpecificContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  padding-bottom: 1.5rem;
  border-radius: 20px;

  &:hover {
    opacity: 1;
  }
`;

export const IconStyle = styled.img`
  height: 70px;
  width: 70px;
  padding: 15px;
`;

export const IconText = styled.h3`
  font-size: 1.4rem;
`;
