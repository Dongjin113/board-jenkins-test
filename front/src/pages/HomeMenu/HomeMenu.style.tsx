import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

const Images = [
  "/images/camping-image.jpg",
  "/images/food-image.jpg",
  "/images/travel-image.jpg",
  "/images/cafe-image.jpg",
];

export const HomeMenuBody = styled.div`
  background-color: ${COLOR.Black};
  font-family: "Raleway", sans-serif;
  line-height: 1.5em;
  margin: 0;
`;

export const Gallery = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100vh;
`;

export const GalleryItem = styled.li`
  border-right: 5px solid #000;
  flex: 1;
  transition: 0.5s;
  position: relative;
  overflow: hidden;

  &:last-child {
    border-right: none;
  }

  &:nth-child(1) {
    background: url(${Images[0]}) no-repeat center center;
  }
  &:nth-child(2) {
    background: url(${Images[1]}) no-repeat center center;
  }
  &:nth-child(3) {
    background: url(${Images[2]}) no-repeat center center;
  }
  &:nth-child(4) {
    background: url(${Images[3]}) no-repeat center center;
  }

  ${Gallery}:hover & {
    flex: 1;
  }

  ${Gallery} &:hover {
    flex: 3;
  }
`;

export const Content = styled.div`
  background-color: ${COLOR.Black};
  color: ${COLOR.White};
  text-align: center;
  height: 250px;
  bottom: -320px;
  transition: 0.5s;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 50px;
  width: 100%;
  opacity: 0; /* 초기에는 안 보이도록 설정 */
  transition: opacity 0.5s;
  font-family: "Jua", sans-serif;
  font-weight: ${FONT.Regular};

  ${GalleryItem}:hover & {
    bottom: 0;
    opacity: 1; /* hover 시에만 보이도록 설정 */
  }
`;
