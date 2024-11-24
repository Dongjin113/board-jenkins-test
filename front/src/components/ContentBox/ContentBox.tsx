import React, { useState } from "react";
import ContentItem from "./ContentItem";

import {
  Content,
  ContentBx,
  ContentContainer,
  ContentDetail,
  ContentItems,
  ContentMidline,
  ContentNav,
  NextIcon,
  PreIcon,
  SlideButton,
} from "./ContentBox.style";
import { campingPreview } from "../../api/constants/camping";
import { useCampingDetailNavigation } from "../../constants/urlNavigator";

interface ContentProps {
  region: string;
  category: string;
  campingData: campingPreview[];
}

function ContentBox({
  region,
  category,
  campingData,
  detailInfoHandler,
}: ContentProps) {
  const [startIdx, setStartIdx] = useState(0);
  const itemsPerPage = 4;
  const contentCounts = campingData.length;

  const handleNextButtonClick = () => {
    const maxPage = Math.ceil(contentCounts / itemsPerPage);
    if (startIdx >= (maxPage - 1) * itemsPerPage - (itemsPerPage - 1)) return;

    startIdx === (maxPage - 2) * itemsPerPage
      ? contentCounts % itemsPerPage === 0
        ? setStartIdx((prevStartIdx) => prevStartIdx + itemsPerPage)
        : setStartIdx(
            (prevStartIdx) => prevStartIdx + (contentCounts % itemsPerPage)
          )
      : setStartIdx((prevStartIdx) => prevStartIdx + itemsPerPage);
  };

  const handlePreButtonClick = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - itemsPerPage, 0));
  };

  return (
    <ContentBx>
      <SlideButton onClick={handlePreButtonClick}>
        <PreIcon />
      </SlideButton>
      <Content>
        <ContentNav>
          <div>
            <span style={{ fontSize: "1.1em" }}> #{region}</span>
            <span style={{ fontSize: "0.9em" }}> [{category}</span>
            <span style={{ fontSize: "0.8em" }}> ({campingData.length})</span>
            <span style={{ fontSize: "0.9em" }}>]</span>
          </div>
          <ContentDetail onClick={useCampingDetailNavigation()}>
            보러가기
          </ContentDetail>
        </ContentNav>
        <ContentMidline />
        <ContentContainer>
          <ContentItems start={startIdx}>
            {campingData.map((camp) => (
              <ContentItem
                key={camp.campingId}
                index={camp.campingId}
                campingData={camp}
                detailInfoHandler={detailInfoHandler}
              />
            ))}
          </ContentItems>
        </ContentContainer>
      </Content>
      <SlideButton onClick={handleNextButtonClick}>
        <NextIcon />
      </SlideButton>
    </ContentBx>
  );
}

export default ContentBox;
