import styled from "styled-components";
import * as KAKAO from "react-kakao-maps-sdk";
import * as COLOR from "../../constants/color";

export const CampingDetails = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const DetailContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 350px;
  height: 100%;
  position: absolute;
  background-color: ${COLOR.Gray0};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  transition: transform 1s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-350px)"};
`;

export const DetailMapContainer = styled(KAKAO.Map)`
  z-index: 0;
  position: absolute;
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 340px)" : "100%")};
  height: 100%;
  margin-left: ${({ isOpen }) => (isOpen ? "350px" : "0")};
  transition: width 1s ease, margin-left 1s ease;
`;

export const DetailContentsNav = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  img {
    width: 150px;
    height: 50px;
    padding-bottom: 15px;
  }
`;

export const DetailContentsNavContainer = styled.div`
  height: 120px;
`;

export const ContentMidline = styled.div`
  display: block;
  height: 1px;
  background-color: ${COLOR.Black};
  opacity: 0.1;
`;

export const DetailContentContainer = styled.div`
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
