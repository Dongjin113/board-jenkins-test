import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const TagContainer = styled.div`
  z-index: 1;
  position: ${({ isMenuFixed }) => (isMenuFixed ? "fixed" : "relative")};
  top: ${({ isMenuFixed }) => (isMenuFixed ? "0" : "")};
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: ${({ isMenuFixed }) => (isMenuFixed ? "120px" : "300px")};
  transition: all 1 ease;

  @media screen and (max-width: 950px) {
    justify-content: space-between;
  }
`;

export const TagContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8%;
  font-size: ${FONT.XXL};
  color: ${COLOR.White};
`;

export const TagLineContainer = styled.div`
  position: absolute;
  padding-top: ${({ isMenuFixed }) => (isMenuFixed ? "0" : "20px")};
`;
export const TagLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagBoxes = styled.div`
  position: absolute;
  z-index: -1;
  opacity: 0.5;
  background-color: ${COLOR.Sub3};
  width: 100%;
  height: 100%;
`;
