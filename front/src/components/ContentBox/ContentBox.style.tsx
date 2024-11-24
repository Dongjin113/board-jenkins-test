import styled from "styled-components";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const ContentItems = styled.ul`
  display: flex;
  transition: transform 1s ease;
  transform: ${({ start }) => `translateX(-${start * 200 + start * 12}px)`};
`;

export const ContentBx = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

export const ContentNav = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 3%;
  margin-right: 3%;
  font-size: ${FONT.XL};
`;

export const ContentDetail = styled.button`
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  font-size: ${FONT.M};
`;

export const ContentMidline = styled.div`
  display: block;
  height: 1px;
  background-color: ${COLOR.Black};
  opacity: 0.1;
`;

export const NextIcon = styled(FcNext)`
  font-size: 20px;
  font-weight: bold;
  color: ${COLOR.White};
  vertical-align: middle;
`;
export const PreIcon = styled(FcPrevious)`
  font-size: 20px;
  font-weight: bold;
  color: ${COLOR.White};
  vertical-align: middle;
`;

export const SlideButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  opacity: 0.3;
  border: none;

  &:hover {
    background-color: ${COLOR.Primary};
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  width: 900px;
  height: 350px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: ${COLOR.White};
  margin-left: 15px;
  margin-right: 15px;
`;

export const ContentContainer = styled.div`
  overflow: hidden;
`;
