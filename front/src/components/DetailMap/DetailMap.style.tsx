import * as KAKAO from "react-kakao-maps-sdk";
import styled from "styled-components";

export const DetailMapContainer = styled.div``;

export const DetailMapContent = styled(KAKAO.Map)`
  z-index: 0;
  position: absolute;
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 340px)" : "100%")};
  height: 100%;
  margin-left: ${({ isOpen }) => (isOpen ? "350px" : "0")};
  transition: width 1s ease, margin-left 1s ease;
`;

export const Marker = styled(KAKAO.MapMarker)`
  z-index: -1;
`;
export const OverlayMap = styled(KAKAO.CustomOverlayMap)`
  z-index: 1;
`;
