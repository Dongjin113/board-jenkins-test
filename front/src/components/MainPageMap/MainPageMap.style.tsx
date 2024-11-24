import * as KAKAO from "react-kakao-maps-sdk";
import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const MapContainer = styled(KAKAO.Map)`
  z-index: 0;
  border-radius: 40px;
  width: 900px;
  height: 600px;
`;

export const Marker = styled(KAKAO.MapMarker)``;

export const MarkerContext = styled.div`
  text-align: center;
  font-size: ${FONT.XS};
  width: 150px;
`;

export const MainPageMapContainer = styled.div``;
