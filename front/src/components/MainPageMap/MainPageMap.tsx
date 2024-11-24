import React, { useEffect, useState } from "react";
import {
  MainPageMapContainer,
  MapContainer,
  Marker,
  MarkerContext,
} from "./MainPageMap.style";
import useGeoLocation from "../../hooks/geoLocation";
import Overlay from "./Overlay";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../recoil/recoilAtom";

function MainPageMap({ campingData, detailInfoHandler }) {
  const userLocation = useGeoLocation();

  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  useEffect(() => {
    setIsOpen(Array(campingData.length).fill(false));
  }, []);

  useEffect(() => {
    setIsOpen(Array(campingData.length).fill(false));
  }, campingData);

  return (
    <MainPageMapContainer>
      <MapContainer
        center={
          userLocation.isLoading
            ? userLocation.center
            : { lat: 37.566680077, lng: 126.97884472 }
        }
        level={6}
      >
        {userLocation.isLoading && (
          <Marker
            position={userLocation.center}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
              size: {
                width: 40,
                height: 40,
              },
            }}
          />
        )}

        {campingData.map((camp) => (
          <div>
            <Marker
              key={camp.campingId}
              position={{ lat: camp.location.lat, lng: camp.location.lng }}
              onClick={() => detailInfoHandler(camp.campingId)}
            >
              {!isOpen[camp.campingId] && (
                <MarkerContext>{camp.placeName}</MarkerContext>
              )}
            </Marker>

            {isOpen[camp.campingId] && (
              <Overlay
                key={camp.campingId}
                detailInfoHandler={detailInfoHandler}
                camp={camp}
              />
            )}
          </div>
        ))}
      </MapContainer>
    </MainPageMapContainer>
  );
}

export default MainPageMap;
