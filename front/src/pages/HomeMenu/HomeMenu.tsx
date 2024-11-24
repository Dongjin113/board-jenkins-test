import React from "react";
import { HomeMenuBody, Content, Gallery, GalleryItem } from "./HomeMenu.style";
import * as Navigator from "../../constants/urlNavigator";

function HomeMenu() {
  return (
    <HomeMenuBody>
      <Gallery>
        <GalleryItem onClick={Navigator.useCampingNavigation()}>
          <Content>
            <h2>캠 핑</h2>
            <p>지역별 캠핑지, 반려동물 동반 캠핑지 소개</p>
          </Content>
        </GalleryItem>
        <GalleryItem onClick={Navigator.useMatjibNavigation()}>
          <Content>
            <h2>맛 집</h2>
            <p>지역별 맛집 소개</p>
          </Content>
        </GalleryItem>
        <GalleryItem onClick={Navigator.useTravelNavigation()}>
          <Content>
            <h2>관 광 지</h2>
            <p>지역별 관광지 소개</p>
          </Content>
        </GalleryItem>
        <GalleryItem onClick={Navigator.useCafeNavigation()}>
          <Content>
            <h2>카 페</h2>
            <p>지역별 카페 소개</p>
          </Content>
        </GalleryItem>
      </Gallery>
    </HomeMenuBody>
  );
}

export default HomeMenu;
