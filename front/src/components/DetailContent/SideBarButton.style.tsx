import styled from "styled-components";

export const SideBarButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;
  border: none;
  z-index: 2;
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: transparent;

  transition: transform 1s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(350px)" : "translateX(0px)"};
`;

export const BackgroundCover = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;
