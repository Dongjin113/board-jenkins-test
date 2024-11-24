import React from "react";
import { BackgroundCover, SideBarButtonContainer } from "./SideBarButton.style";

function SideBarButton({ isOpen, sideBarHandler }) {
  return (
    <SideBarButtonContainer isOpen={isOpen} onClick={sideBarHandler}>
      <BackgroundCover />
      <div>
        <span>
          <img src="/images/camping-image.jpg" width={"30px"} height={"30px"} />
        </span>
        <span>
          {isOpen ? (
            <div style={{ fontSize: "10px" }}>닫기</div>
          ) : (
            <div style={{ fontSize: "10px" }}>캠핑장 정보</div>
          )}
        </span>
      </div>
    </SideBarButtonContainer>
  );
}

export default SideBarButton;
