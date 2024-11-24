import styled from "styled-components";
import * as FONT from "../../constants/font";
import { FaHeart, FaStar } from "react-icons/fa";
import * as COLOR from "../../constants/color";

export const ContentDetail = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`;
export const ContentImage = styled.img`
  border-radius: 20px;
  width: 100px;
  height: 100px;
`;
export const ContentTopContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const ContentTop = styled.div`
  padding-top: 5px;
  padding-left: 15px;
  line-height: 1.3em;
`;
export const ContentTitle = styled.div`
  font-size: ${FONT.M};
`;
export const ContentPosition = styled.div`
  font-size: ${FONT.S};
`;
export const ContentRegion = styled.span`
  &:after {
    content: "|";
    margin-right: 5px;
    margin-left: 5px;
  }
`;
export const ContentCity = styled.span``;
export const ContentCategory = styled.div`
  font-size: ${FONT.XS};
`;

export const ContentScoreContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT.S};
  height: 30px;
`;
export const ContentScore = styled.span``;
export const ContentStar = styled.span``;
export const ContentLike = styled.span``;

export const StarIcon = styled(FaStar)`
  color: ${COLOR.Yellow};
  margin-right: 2px;
  vertical-align: middle;
  margin-bottom: 5px;
`;

export const HeartIcon = styled(FaHeart)`
  color: ${COLOR.Red};
  margin-right: 3px;
  vertical-align: middle;
  margin-bottom: 5px;
`;

export const ContentBottom = styled.div`
  padding-bottom: 10px;
`;

export const ContentContainer = styled.div``;

export const ContentCoverContainer = styled.div`
  position: relative;
`;
export const ContentCover = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${({ isHover }) => (isHover ? "gray" : "white")};
  opacity: 0.4;
`;

export const ContentMidline = styled.div`
  height: 1px;
  width: 90%;
  margin-left: 5%;
  background-color: ${COLOR.Black};
  opacity: 0.1;
`;
