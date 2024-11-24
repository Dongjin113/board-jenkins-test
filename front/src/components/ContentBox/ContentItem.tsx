import {
  Area,
  ContentImage,
  ContentIt,
  ContentName,
  CoverContents,
  CoverFooter,
  CoverIntroduce,
  CoverMidline,
  CoverSubtitle,
  CoverTitle,
  HeartIcon,
  IntroduceCover,
  Likes,
  Menu,
  Score,
  StarCover,
  StarIcon,
  Stars,
} from "./ContentItem.style";

function ContentItem({ campingData, detailInfoHandler }) {
  const truncateCoverIntroduce = (text: string) => {
    if (text.length <= 24) return text;
    return text.substring(0, 24) + "...";
  };

  return (
    <ContentIt>
      <ContentImage
        onMouseEnter={() => detailInfoHandler(campingData.campingId)}
        onMouseLeave={() => detailInfoHandler(campingData.campingId)}
      >
        <img src="/images/cafe-image.jpg" />
        <StarCover>
          <StarIcon />
          4.3
        </StarCover>
        <IntroduceCover>
          <CoverContents>
            <CoverTitle> {campingData.placeName}</CoverTitle>
            <CoverSubtitle>
              <Area> {campingData.address.region}</Area>
              <Menu> {campingData.address.city}</Menu>
            </CoverSubtitle>
            <CoverMidline />
            <CoverIntroduce>
              {truncateCoverIntroduce(campingData.subIntro)}
            </CoverIntroduce>
            <CoverFooter>
              <Score>90</Score>
              <Stars>
                <StarIcon />
                4.3
              </Stars>
              <Likes>
                <HeartIcon />
                130
              </Likes>
            </CoverFooter>
          </CoverContents>
        </IntroduceCover>
      </ContentImage>
      <ContentName>{campingData.placeName}</ContentName>
    </ContentIt>
  );
}

export default ContentItem;
