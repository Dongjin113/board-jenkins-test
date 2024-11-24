import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const ContentImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 5%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ContentIt = styled.li`
  padding-right: 12px;
  list-style-type: none;
`;

export const IntroduceCover = styled.div`
  position: absolute;
  z-index: -1;
  background-color: ${COLOR.Black};
  top: 20%;
  left: 0;
  width: 100%;
  height: 80%;
  z-index: -1;
  color: white;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.5s ease;

  ${ContentImage}:hover & {
    z-index: 1;
    opacity: 0.7;
    transform: scale(1.04);
  }
`;

export const CoverTitle = styled.div`
  padding-top: 10%;

  font-size: ${FONT.M};
`;

export const CoverSubtitle = styled.div`
  display: flex;
  font-size: ${FONT.S};
  padding-top: 3%;
  padding-bottom: 3%;
`;

export const Area = styled.div`
  padding-right: 5px;
`;
export const Menu = styled.div`
  &::before {
    content: "|";
  }
`;

export const CoverMidline = styled.span`
  display: block;
  height: 1px;
  background-color: ${COLOR.White};
  opacity: 0.3;
`;

export const CoverIntroduce = styled.div`
  padding-top: 5%;
  font-size: ${FONT.S};
  line-height: 1.5;
`;

export const CoverContents = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;

export const CoverFooter = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT.S};
  height: 30px;
`;
export const Score = styled.div`
  &:after {
    content: "점";
    margin-right: 5px;
  }
`;
export const StarIcon = styled(FaStar)`
  color: ${COLOR.Yellow};
  margin-right: 2px;
  vertical-align: middle;
  margin-bottom: 2px;
`;

export const HeartIcon = styled(FaHeart)`
  color: ${COLOR.Red};
  margin-right: 3px;
  vertical-align: middle;
`;

export const Stars = styled.div`
  margin-right: 5px;
  margin-bottom: 2px;
`;
export const Likes = styled.div`
  margin-bottom: 2px;
`;

export const ContentName = styled.div`
  margin-top: 7%;
`;

export const StarCover = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  align-items: center;
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 30%;
  background-color: ${COLOR.Black};
  visibility: visible;
  opacity: 0.5;
  color: ${COLOR.White};
  font-size: ${FONT.XS};
  transition: opacity 0.5s ease;

  ${ContentImage}:hover & {
    visibility: hidden;
    opacity: 0;
  }
`;
