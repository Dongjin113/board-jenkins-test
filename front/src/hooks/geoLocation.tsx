import { useEffect, useState } from "react";

interface GeoLocationData {
  center: { lat: number; lng: number };
  errMsg: string | null;
  isLoading: boolean;
}

export const useGeoLocation = (): GeoLocationData => {
  const [location, setLocation] = useState<GeoLocationData>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: false,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          {
            console.log(position.coords.latitude, position.coords.longitude);
          }
          setLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: true,
          }));
        },
        (err) => {
          setLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setLocation((prev) => ({
        ...prev,
        errMsg: "사용자의 위치정보를 받아올 수 없습니다",
        isLoading: false,
      }));
    }
  }, []);

  return location;
};

export default useGeoLocation;
