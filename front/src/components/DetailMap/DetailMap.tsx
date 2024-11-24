import React, { useEffect, useState } from "react";
import {
  DetailMapContainer,
  DetailMapContent,
  Marker,
  OverlayMap,
} from "./DetailMap.style";
import { useDebounce } from "../../hooks/useDebounced";
import { CustomOverlayMap, MarkerClusterer } from "react-kakao-maps-sdk";
import RegionOverlay from "./RegionOverlay";
import { useRecoilState } from "recoil";
import { campingData, detailMapIsOpen } from "../../recoil/recoilAtom";
import useDetailMapPageAPI from "../../api/camping/useDetailMapPageAPI";
import DetailOverlay from "./DetailOverlay";

function DetailMap({ isSideBar, center, regionCounts }) {
  const [data, setData] = useState<{
    level: number;
    position: {
      lat: number;
      lng: number;
    };
  }>();
  const [bounds, setBounds] = useState<{
    sw: string;
    ne: string;
  }>();
  const [camp, setCamp] = useRecoilState(campingData);
  const [isOpen, setIsOpen] = useRecoilState(detailMapIsOpen);
  const debouncedData = useDebounce(data, 500);
  const debouncedBounds = useDebounce(bounds, 500);
  const { requestCampingLocation, requestPreviewCamping } =
    useDetailMapPageAPI();

  useEffect(() => {
    console.log("camp={}", camp);
    console.log("isOpen={}", isOpen);
    setIsOpen(Array(camp.length).fill(false));
  }, []);

  useEffect(() => {
    console.log("camp={}", camp);
    console.log("isOpen={}", isOpen);
  }, [camp]);

  useEffect(() => {
    console.log("중심지도레벨", debouncedData);
    console.log("동서남북", debouncedBounds);
    if (data?.level < 10 && (debouncedData || debouncedBounds)) {
      console.log("위치로 캠핑장정보를 받아옵니다");
      const swValues = debouncedBounds.sw.replace(/[()]/g, "").split(", ");
      const westLat = swValues[0];
      const southLng = swValues[1];

      const neValues = debouncedBounds.ne.replace(/[()]/g, "").split(", ");
      const eastLat = neValues[0];
      const northLng = neValues[1];

      requestCampingLocation(northLng, southLng, westLat, eastLat, setCamp);
    }
  }, [debouncedData, debouncedBounds]);

  const handleIsOpen = (campingId) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[campingId] = !newState[campingId];
      return newState;
    });
  };

  return (
    <DetailMapContainer>
      <DetailMapContent
        center={{ lat: center.lat, lng: center.lng }}
        level={10}
        isOpen={isSideBar}
        onCenterChanged={(map) => {
          const level = map.getLevel();
          const latlng = map.getCenter();
          setData({
            level: level,
            position: {
              lat: latlng.getLat(),
              lng: latlng.getLng(),
            },
          });
        }}
        onBoundsChanged={(map) => {
          const bounds = map.getBounds();
          setBounds({
            sw: bounds.getSouthWest().toString(),
            ne: bounds.getNorthEast().toString(),
          });
        }}
      >
        {data?.level > 9 &&
          regionCounts.map((region) => (
            <CustomOverlayMap
              position={{
                lat: region.lat,
                lng: region.lng - 0.03,
              }}
            >
              <RegionOverlay region={region} regionCounts={regionCounts} />
            </CustomOverlayMap>
          ))}
        {data?.level < 10 &&
          camp.map((camp) => (
            <div>
              <Marker
                key={camp.campingId}
                position={{ lat: camp.location.lat, lng: camp.location.lng }}
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
                  size: {
                    width: 40,
                    height: 40,
                  },
                }}
                onClick={() => handleIsOpen(camp.campingId)}
              >
                {!isOpen[camp.campingId] && camp.placeName}
              </Marker>
              <OverlayMap
                position={{
                  lat: camp.location.lat,
                  lng: camp.location.lng,
                }}
              >
                {isOpen[camp.campingId] && (
                  <DetailOverlay camp={camp} handleIsOpen={handleIsOpen} />
                )}
              </OverlayMap>
            </div>
          ))}
      </DetailMapContent>
    </DetailMapContainer>
  );
}

export default DetailMap;
