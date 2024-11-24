import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const MainPageContainer = styled.div``;

export const ContentBoxContainer = styled.div`
  padding-top: "20px";
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    align-items: flex-start;
  }
`;

export const MapContainer = styled.div`
  padding-top: ${({ isMenuFixed }) => (isMenuFixed ? "300px" : "20px")};

  z-index: -2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
`;
