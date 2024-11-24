import React, { useEffect, useState } from "react";
import {
  CampingDetails,
  ContentMidline,
  DetailContentContainer,
  DetailContentsContainer,
  DetailContentsNav,
  DetailContentsNavContainer,
} from "./CampingDetailMap.style";
import SideBarButton from "../../components/DetailContent/SideBarButton";
import DetailContent from "../../components/DetailContent/DetailContent";
import { campingRegionCounts } from "../../api/constants/camping";
import DetailMap from "../../components/DetailMap/DetailMap";
import useDetailMapPageAPI from "../../api/camping/useDetailMapPageAPI";
import { campingData, detailMapIsOpen } from "../../recoil/recoilAtom";
import { useRecoilState } from "recoil";

function CampingDetail() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [region, setRegion] = useState("서울");
  const [campingRegionCount, setCampingRegionCount] =
    useState<campingRegionCounts[]>();
  const { requestPreviewCamping, requestCampingRegionCounts } =
    useDetailMapPageAPI();
  const [isOpen, setIsOpen] = useRecoilState(detailMapIsOpen);

  const [regionCampings, setRegionCampings] = useRecoilState(campingData);
  const [mapCenter, setMapSenter] = useState({
    lat: 37.566680077,
    lng: 126.97884472,
  });

  const sideBarHandler = () => {
    setIsSideBar((prev) => !prev);
  };

  const campingDetailHandler = () => {
    setIsSideBar((prev) => !prev);
  };

  const handleRegionCamping = (region) => {
    setRegion(region);
    requestPreviewCamping(region, setRegionCampings);
    requestCampingRegionCounts(setCampingRegionCount);
    console.log(regionCampings);
    console.log(campingRegionCount);
  };

  useEffect(() => {
    handleRegionCamping("서울");
  }, []);

  return (
    <CampingDetails>
      <DetailContentsContainer isOpen={isSideBar}>
        <DetailContentsNavContainer>
          <DetailContentsNav>
            <img src="/images/Some.png" />
            <div style={{ fontSize: "20px", paddingBottom: "5px" }}>
              <span>{region}</span>
              <span
                style={{ fontSize: "18px", color: "gray", paddingLeft: "6px" }}
              >
                #캠핑장
              </span>
            </div>
          </DetailContentsNav>
          <ContentMidline />
        </DetailContentsNavContainer>
        <DetailContentContainer>
          {regionCampings?.map((camp) => (
            <DetailContent
              key={camp.campingId}
              campData={camp}
              onMouseEnter={() => campingDetailHandler(campingData.campingId)}
              onMouseLeave={() => detailInfoHandler(campingData.campingId)}
            />
          ))}
        </DetailContentContainer>
      </DetailContentsContainer>
      <SideBarButton isOpen={isSideBar} sideBarHandler={sideBarHandler} />
      <DetailMap
        center={mapCenter}
        isSideBar={isSideBar}
        regionCounts={campingRegionCount}
      />
    </CampingDetails>
  );
}

export default CampingDetail;
