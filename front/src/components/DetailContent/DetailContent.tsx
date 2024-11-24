import React, { useEffect, useState } from "react";
import {
  ContentBottom,
  ContentCategory,
  ContentCity,
  ContentContainer,
  ContentCover,
  ContentCoverContainer,
  ContentDetail,
  ContentImage,
  ContentLike,
  ContentMidline,
  ContentPosition,
  ContentRegion,
  ContentScore,
  ContentScoreContainer,
  ContentStar,
  ContentTitle,
  ContentTop,
  ContentTopContainer,
  HeartIcon,
  StarIcon,
} from "./DetailContent.style";

function DetailContent({ campData }) {
  const [isHover, setIsHover] = useState(false);

  const truncateCoverIntroduce = (text: string, length: num) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  const hoverHandler = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <ContentContainer>
      <ContentCoverContainer
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <ContentCover isHover={isHover} />
        <ContentDetail>
          <ContentTopContainer>
            <ContentImage src="/images/camping-image.jpg" />
            <ContentTop>
              <ContentTitle>
                {truncateCoverIntroduce(campData.placeName, 17)}
              </ContentTitle>
              <ContentPosition>
                <ContentRegion>{campData.address.region}</ContentRegion>
                <ContentCity>{campData.address.city}</ContentCity>
              </ContentPosition>
              <ContentCategory>
                {campData.categories.map((category, index) => (
                  <span style={{ color: "gray" }} key={index}>
                    #{category}{" "}
                  </span>
                ))}
              </ContentCategory>
              <ContentScoreContainer>
                <ContentScore>
                  <span style={{ color: "Blue" }}>91</span>
                  <span style={{ paddingLeft: "4px" }}>점</span>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "11px",
                      paddingLeft: "5px",
                    }}
                  >
                    |
                  </span>
                </ContentScore>
                <ContentStar>
                  <span style={{ paddingLeft: "5px" }}>
                    <StarIcon />
                  </span>
                  <span>4.3</span>
                  <span style={{ paddingLeft: "3px" }}>(65)명</span>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "11px",
                      paddingLeft: "5px",
                    }}
                  >
                    |
                  </span>
                </ContentStar>
                <ContentLike>
                  <span style={{ paddingLeft: "5px" }}>
                    <HeartIcon />
                  </span>
                  <span style={{ paddingLeft: "3px" }}>143</span>
                </ContentLike>
              </ContentScoreContainer>
            </ContentTop>
          </ContentTopContainer>
          <ContentBottom>
            {truncateCoverIntroduce(campData.subIntro, 28)}
          </ContentBottom>
        </ContentDetail>
        <ContentMidline />
      </ContentCoverContainer>
    </ContentContainer>
  );
}

export default DetailContent;
